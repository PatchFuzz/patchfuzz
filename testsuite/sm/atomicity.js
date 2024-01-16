






const DEBUG = 0;


const ITERATIONS = 100000;



const NUMWORKERS = 2;
const NUMAGENTS = NUMWORKERS + 1;



if (!wasmThreadsEnabled() || helperThreadCount() < NUMWORKERS) {
    if (DEBUG > 0)
        print("Threads not supported");
    quit(0);
}






if (getCoreCount() < NUMAGENTS) {
    if (DEBUG > 0)
        print("Fake or feeble hardware");
    quit(0);
}




let conf = getBuildConfiguration();
if (conf["arm-simulator"] || conf["arm64-simulator"] ||
    conf["mips-simulator"] || conf["mips64-simulator"])
{
    if (DEBUG > 0)
        print("Atomicity test disabled on simulator");
    quit(0);
}








var COORD_BUSY = 0;
var COORD_NUMLOC = 1;

var coord = new Int32Array(new SharedArrayBuffer(COORD_NUMLOC*4));

function spawn(text) {
    text = `
var _coord = new Int32Array(getSharedObject());
Atomics.store(_coord, ${COORD_BUSY}, 0);
function receive() {
  while (!Atomics.load(_coord, ${COORD_BUSY}))
      ;
  let x = getSharedObject();
  Atomics.store(_coord, ${COORD_BUSY}, 0);
  return x;
}
` + text;
    setSharedObject(coord.buffer);
    Atomics.store(coord, COORD_BUSY, 1);
    evalInWorker(text);
    while (Atomics.load(coord, COORD_BUSY))
        ;
}

function send(x) {
  while(Atomics.load(coord, COORD_BUSY))
      ;
  setSharedObject(x);
  Atomics.store(coord, COORD_BUSY, 1);
  while(Atomics.load(coord, COORD_BUSY))
      ;
}




























































function makeModule(id) {
    let isMaster = id == 0;
    let VALSHIFT = NUMAGENTS;      

    function makeLoop(bits, name, op, loc, initial, val, expected) {
        
        let NUMVALS32 = Math.floor(31/VALSHIFT);
        let NUMVALS = bits == 64 ? 2 * NUMVALS32 : Math.floor(Math.min(bits,31)/VALSHIFT);
        let BARRIER = "(i32.const 0)";
        let barrier = `
  ;; Barrier
  (local.set $barrierValue (i32.add (local.get $barrierValue) (i32.const ${NUMAGENTS})))
  (drop (i32.atomic.rmw.add ${BARRIER} (i32.const 1)))
  (loop $c1
   (if (i32.lt_s (i32.atomic.load ${BARRIER}) (local.get $barrierValue))
       (br $c1)))
  ;; End barrier
`;

        

        function distribute(v) {
            if (bits <= 32)
                return '0x' + dist32(v);
            return '0x' + dist32(v) + dist32(v);
        }

        function dist32(v) {
            let n = 0;
            for (let i=0; i < Math.min(NUMVALS, NUMVALS32); i++)
                n = n | (v << (i*VALSHIFT));
            assertEq(n >= 0, true);
            return (n + 0x100000000).toString(16).substring(1);
        }

        

        function format(val, pos) {
            if (bits <= 32)
                return '0x' + format32(val, pos);
            if (pos < NUMVALS32)
                return '0x' + '00000000' + format32(val, pos);
            return '0x' + format32(val, pos - NUMVALS32) + '00000000';
        }

        function format32(val, pos) {
            return ((val << (pos * VALSHIFT)) + 0x100000000).toString(16).substring(1);
        }

        let width = bits < 32 ? '' + bits : '';
        let view = bits < 32 ? '_u' : '';
        let prefix = bits == 64 ? 'i64' : 'i32';
        return `
 (func ${name} (param $barrierValue i32) (result i32)
   (local $n i32)
   (local $tmp ${prefix})
   (local.set $n (i32.const ${ITERATIONS}))
   (loop $outer
    (if (local.get $n)
        (block
         ${isMaster ? `;; Init
(${prefix}.atomic.store${width} ${loc} (${prefix}.const ${distribute(initial)}))` : ``}
         ${barrier}

${(() => {
    let s = `;; Do\n`;
    for (let i=0; i < NUMVALS; i++) {
        let bitval = `(${prefix}.const ${format(val, i)})`
        
        
        if (op.match(/cmpxchg/)) {
            s += `(loop $doit
                   (local.set $tmp (${prefix}.atomic.load${width}${view} ${loc}))
                   (br_if $doit (i32.eqz
                                 (${prefix}.eq
                                  (local.get $tmp)
                                  (${op} ${loc} (local.get $tmp) (${prefix}.or (local.get $tmp) ${bitval}))))))
            `;
        } else {
            s += `(drop (${op} ${loc} ${bitval}))
            `;
       }
     }
    return s
})()}
         (loop $wait_done
          (br_if $wait_done (${prefix}.ne (${prefix}.atomic.load${width}${view} ${loc}) (${prefix}.const ${distribute(expected)}))))
         ${barrier}
         (local.set $n (i32.sub (local.get $n) (i32.const 1)))
         (br $outer))))
  (local.get $barrierValue))`;
    }

    const ADDLOC = "(i32.const 256)";
    const ADDINIT = 0;
    const ADDVAL = [1, 2, 4];
    const ADDRESULT = 7;

    const SUBLOC = "(i32.const 512)";
    const SUBINIT = 7;
    const SUBVAL = [1, 2, 4];
    const SUBRESULT = 0;

    const ANDLOC = "(i32.const 768)";
    const ANDINIT = 7;
    const ANDVAL = [3, 6, 5];
    const ANDRESULT = 0;

    const ORLOC = "(i32.const 1024)";
    const ORINIT = 0;
    const ORVAL = [1, 2, 4];
    const ORRESULT = 7;

    const XORLOC = "(i32.const 1280)";
    const XORINIT = 0;
    const XORVAL = [1, 2, 4];
    const XORRESULT = 7;

    const CMPXCHGLOC = "(i32.const 1536)";
    const CMPXCHGINIT = 0;
    const CMPXCHGVAL = [1, 2, 4];
    const CMPXCHGRESULT = 7;

    return `
(module
 (import "" "memory" (memory 1 1 shared))
 (import "" "print" (func $print (param i32)))

 ${makeLoop(8, "$test_add8", "i32.atomic.rmw8.add_u", ADDLOC, ADDINIT, ADDVAL[id], ADDRESULT)}
 ${makeLoop(8, "$test_sub8", "i32.atomic.rmw8.sub_u", SUBLOC, SUBINIT, SUBVAL[id], SUBRESULT)}
 ${makeLoop(8, "$test_and8", "i32.atomic.rmw8.and_u", ANDLOC, ANDINIT, ANDVAL[id], ANDRESULT)}
 ${makeLoop(8, "$test_or8", "i32.atomic.rmw8.or_u",   ORLOC, ORINIT, ORVAL[id], ORRESULT)}
 ${makeLoop(8, "$test_xor8", "i32.atomic.rmw8.xor_u", XORLOC, XORINIT, XORVAL[id], XORRESULT)}
 ${makeLoop(8, "$test_cmpxchg8", "i32.atomic.rmw8.cmpxchg_u", CMPXCHGLOC, CMPXCHGINIT, CMPXCHGVAL[id], CMPXCHGRESULT)}

 ${makeLoop(16, "$test_add16", "i32.atomic.rmw16.add_u", ADDLOC, ADDINIT, ADDVAL[id], ADDRESULT)}
 ${makeLoop(16, "$test_sub16", "i32.atomic.rmw16.sub_u", SUBLOC, SUBINIT, SUBVAL[id], SUBRESULT)}
 ${makeLoop(16, "$test_and16", "i32.atomic.rmw16.and_u", ANDLOC, ANDINIT, ANDVAL[id], ANDRESULT)}
 ${makeLoop(16, "$test_or16", "i32.atomic.rmw16.or_u",   ORLOC, ORINIT, ORVAL[id], ORRESULT)}
 ${makeLoop(16, "$test_xor16", "i32.atomic.rmw16.xor_u", XORLOC, XORINIT, XORVAL[id], XORRESULT)}
 ${makeLoop(16, "$test_cmpxchg16", "i32.atomic.rmw16.cmpxchg_u", CMPXCHGLOC, CMPXCHGINIT, CMPXCHGVAL[id], CMPXCHGRESULT)}

 ${makeLoop(32, "$test_add", "i32.atomic.rmw.add", ADDLOC, ADDINIT, ADDVAL[id], ADDRESULT)}
 ${makeLoop(32, "$test_sub", "i32.atomic.rmw.sub", SUBLOC, SUBINIT, SUBVAL[id], SUBRESULT)}
 ${makeLoop(32, "$test_and", "i32.atomic.rmw.and", ANDLOC, ANDINIT, ANDVAL[id], ANDRESULT)}
 ${makeLoop(32, "$test_or", "i32.atomic.rmw.or",   ORLOC, ORINIT, ORVAL[id], ORRESULT)}
 ${makeLoop(32, "$test_xor", "i32.atomic.rmw.xor", XORLOC, XORINIT, XORVAL[id], XORRESULT)}
 ${makeLoop(32, "$test_cmpxchg", "i32.atomic.rmw.cmpxchg", CMPXCHGLOC, CMPXCHGINIT, CMPXCHGVAL[id], CMPXCHGRESULT)}

 ${makeLoop(64, "$test_add64", "i64.atomic.rmw.add", ADDLOC, ADDINIT, ADDVAL[id], ADDRESULT)}
 ${makeLoop(64, "$test_sub64", "i64.atomic.rmw.sub", SUBLOC, SUBINIT, SUBVAL[id], SUBRESULT)}
 ${makeLoop(64, "$test_and64", "i64.atomic.rmw.and", ANDLOC, ANDINIT, ANDVAL[id], ANDRESULT)}
 ${makeLoop(64, "$test_or64", "i64.atomic.rmw.or",   ORLOC, ORINIT, ORVAL[id], ORRESULT)}
 ${makeLoop(64, "$test_xor64", "i64.atomic.rmw.xor", XORLOC, XORINIT, XORVAL[id], XORRESULT)}
 ${makeLoop(64, "$test_cmpxchg64", "i64.atomic.rmw.cmpxchg", CMPXCHGLOC, CMPXCHGINIT, CMPXCHGVAL[id], CMPXCHGRESULT)}

 (func (export "test")
  (local $barrierValue i32)
  (call $print (i32.const ${10 + id}))
  (local.set $barrierValue (call $test_add8 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_sub8 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_and8 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_or8 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_xor8 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_cmpxchg8 (local.get $barrierValue)))
  (call $print (i32.const ${20 + id}))
  (local.set $barrierValue (call $test_add16 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_sub16 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_and16 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_or16 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_xor16 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_cmpxchg16 (local.get $barrierValue)))
  (call $print (i32.const ${30 + id}))
  (local.set $barrierValue (call $test_add (local.get $barrierValue)))
  (local.set $barrierValue (call $test_sub (local.get $barrierValue)))
  (local.set $barrierValue (call $test_and (local.get $barrierValue)))
  (local.set $barrierValue (call $test_or (local.get $barrierValue)))
  (local.set $barrierValue (call $test_xor (local.get $barrierValue)))
  (local.set $barrierValue (call $test_cmpxchg (local.get $barrierValue)))
  (call $print (i32.const ${40 + id}))
  (local.set $barrierValue (call $test_add64 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_sub64 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_and64 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_or64 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_xor64 (local.get $barrierValue)))
  (local.set $barrierValue (call $test_cmpxchg64 (local.get $barrierValue)))
 ))
`;
}

function makeModule2(id) {
    let text = makeModule(id);
    if (DEBUG > 1)
        print(text);
    return new WebAssembly.Module(wasmTextToBinary(text));
}

var mods = [];
mods.push(makeModule2(0));
for ( let i=0; i < NUMWORKERS; i++ )
    mods.push(makeModule2(i+1));
if (DEBUG > 2)
    quit(0);
var mem = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});





function startWorkers() {
    for ( let i=0; i < NUMWORKERS; i++ ) {
        spawn(`
var mem = receive();
var mod = receive();
function pr(n) { if (${DEBUG}) print(n); }
var ins = new WebAssembly.Instance(mod, {"":{memory: mem, print:pr}});
if (${DEBUG} > 0)
    print("Running ${i}");
ins.exports.test();
              `);
        send(mem);
        send(mods[i+1]);
    }
}





startWorkers();
function pr(n) { if (DEBUG) print(n); }
var ins = new WebAssembly.Instance(mods[0], {"":{memory: mem, print:pr}});
if (DEBUG > 0)
    print("Running master");
ins.exports.test();
