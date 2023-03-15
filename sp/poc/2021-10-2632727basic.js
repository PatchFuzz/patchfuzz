



const MaxMemory64Field = 0x1_0000_0000_0000; 
const MaxUint32 = 0xFFFF_FFFF;



function memoryTypeModuleText(shared, initial, max) {
  return `(module
            (memory i64 ${initial} ${max !== undefined ? max : ''} ${shared ? `shared` : ''}))`;
}
function memoryTypeDescriptor(shared, initial, max) {
  return {
    
    
    index: 'i64',
    initial,
    maximum: max,
    shared,
  };
}
function validMemoryType(shared, initial, max) {
  print(memoryTypeModuleText(shared, initial, max));
  print(memoryTypeModuleText(shared, initial, max));
  
  
  new WebAssembly.Memory(memoryTypeDescriptor(shared, initial, max));
}
function invalidMemoryType(shared, initial, max, compileMessage, jsMessage) {
  print(memoryTypeModuleText(shared, initial, max), compileMessage);
  print(() => print(memoryTypeModuleText(shared, initial, max)), WebAssembly.CompileError, compileMessage);
  
  
  print(() => new WebAssembly.Memory(memoryTypeDescriptor(shared, initial, max)), Error, jsMessage);
}


validMemoryType(false, 0);

validMemoryType(false, 0, 1);

invalidMemoryType(false, 2, 1, /minimum must not be greater than maximum/, /bad Memory maximum size/);

validMemoryType(true, 1, 2);

invalidMemoryType(true, 1, undefined, /maximum length required for shared memory/, /maximum is not specified/);


validMemoryType(false, 0, MaxMemory64Field);
invalidMemoryType(false, 0, MaxMemory64Field + 1, /maximum memory size too big/, /bad Memory maximum/);
validMemoryType(true, 0, MaxMemory64Field);
invalidMemoryType(true, 0, MaxMemory64Field + 1, /maximum memory size too big/, /bad Memory maximum/);


function testLink(importedIndexType, importIndexType) {
  let imported = new WebAssembly.Memory({
    
    
    index: importedIndexType,
    initial: 0,
  });
  let testModule =
      `(module
         (memory (import "" "imported") ${importIndexType} 0))`;
  if (importedIndexType === importIndexType) {
    print(testModule, {"": {imported}});
  } else {
    print(() => print(testModule, {"": {imported}}), WebAssembly.LinkError, /index type/);
  }
}

var memTypes = [
    ['i64', 'i64'],
    ['i32', 'i32'],
    ['i64', 'i32'],
    ['i32', 'i64']];

for ( let [a,b] of memTypes ) {
    testLink(a, b);
}



for ( let [memType,exprType] of memTypes ) {
    print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1)
  (data (${exprType}.const 0) "abcde"))`)), memType == exprType);
}



var validOffsets = {i32: ['', 'offset=0x10000000'],
                    i64: ['', 'offset=0x10000000', 'offset=0x200000000']}


for (let [memType, ptrType] of memTypes ) {
    for (let offs of validOffsets[memType]) {
        print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1)
  (func (param $p ${ptrType}) (param $i i32) (param $l i64) (param $f f32) (param $d f64)
    (drop (i32.add (i32.const 1) (i32.load8_s ${offs} (local.get $p))))
    (drop (i32.add (i32.const 1) (i32.load8_u ${offs} (local.get $p))))
    (drop (i32.add (i32.const 1) (i32.load16_s ${offs} (local.get $p))))
    (drop (i32.add (i32.const 1) (i32.load16_u ${offs} (local.get $p))))
    (drop (i32.add (i32.const 1) (i32.load ${offs} (local.get $p))))
    (i32.store8 ${offs} (local.get $p) (local.get $i))
    (i32.store16 ${offs} (local.get $p) (local.get $i))
    (i32.store ${offs} (local.get $p) (local.get $i))
    (drop (i64.add (i64.const 1) (i64.load8_s ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load8_u ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load16_s ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load16_u ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load32_s ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load32_u ${offs} (local.get $p))))
    (drop (i64.add (i64.const 1) (i64.load ${offs} (local.get $p))))
    (i64.store8 ${offs} (local.get $p) (local.get $l))
    (i64.store16 ${offs} (local.get $p) (local.get $l))
    (i64.store32 ${offs} (local.get $p) (local.get $l))
    (i64.store ${offs} (local.get $p) (local.get $l))
    (drop (f32.add (f32.const 1) (f32.load ${offs} (local.get $p))))
    (f32.store ${offs} (local.get $p) (local.get $f))
    (drop (f64.add (f64.const 1) (f64.load ${offs} (local.get $p))))
    (f64.store ${offs} (local.get $p) (local.get $d))
))`)), memType == ptrType);
    }
}


for (let [memType, ptrType] of memTypes ) {
    print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1)
  (data $seg "0123456789abcdef")
  (func (param $p ${ptrType})
    (drop (${ptrType}.add (${ptrType}.const 1) (memory.size)))
    (drop (${ptrType}.add (${ptrType}.const 1) (memory.grow (${ptrType}.const 1))))
    (memory.copy (local.get $p) (${ptrType}.const 0) (${ptrType}.const 628))
    (memory.fill (local.get $p) (i32.const 37) (${ptrType}.const 1024))
    (memory.init $seg (local.get $p) (i32.const 3) (i32.const 5))
))`)), memType == ptrType);
}


if (wasmSimdEnabled()) {
    for (let [memType, ptrType] of memTypes ) {
        for (let offs of validOffsets[memType]) {
            print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1)
  (func (param $p ${ptrType}) (param $v v128) (param $w v128)
    (drop (i8x16.add (local.get $w) (v128.load ${offs} (local.get $p))))
    (v128.store ${offs} (local.get $p) (local.get $v))
    (drop (i8x16.add (local.get $w) (v128.load8_splat ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load16_splat ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load32_splat ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load64_splat ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load32_zero ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load64_zero ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load8_lane ${offs} 1 (local.get $p) (local.get $v))))
    (drop (i8x16.add (local.get $w) (v128.load16_lane ${offs} 1 (local.get $p) (local.get $v))))
    (drop (i8x16.add (local.get $w) (v128.load32_lane ${offs} 1 (local.get $p) (local.get $v))))
    (drop (i8x16.add (local.get $w) (v128.load64_lane ${offs} 1 (local.get $p) (local.get $v))))
    (v128.store8_lane ${offs} 1 (local.get $p) (local.get $v))
    (v128.store16_lane ${offs} 1 (local.get $p) (local.get $v))
    (v128.store32_lane ${offs} 1 (local.get $p) (local.get $v))
    (v128.store64_lane ${offs} 1 (local.get $p) (local.get $v))
    (drop (i8x16.add (local.get $w) (v128.load8x8_s ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load8x8_u ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load16x4_s ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load16x4_u ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load32x2_s ${offs} (local.get $p))))
    (drop (i8x16.add (local.get $w) (v128.load32x2_u ${offs} (local.get $p))))
))`)), memType == ptrType);
        }
    }
}


if (wasmThreadsEnabled()) {
    for (let [memType, ptrType] of memTypes ) {
        for (let offs of validOffsets[memType]) {
            print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1 100 shared)
  (func (param $p ${ptrType}) (param $i i32) (param $l i64)
    (drop (i32.add (i32.const 1) (memory.atomic.wait32 ${offs} (local.get $p) (i32.const 0) (i64.const 37))))
    (drop (i32.add (i32.const 1) (memory.atomic.wait64 ${offs} (local.get $p) (i64.const 0) (i64.const 37))))
    (drop (i32.add (i32.const 1) (memory.atomic.notify ${offs} (local.get $p) (i32.const 1))))
))`)), memType == ptrType);

            for (let [ty,size,sx] of
                 [['i32','','','',],['i32','8','_u'],['i32','16','_u'],
                  ['i64','',''],['i64','8','_u'],['i64','16','_u'],['i64','32','_u']]) {
                print(WebAssembly.validate(print(`
(module
  (memory ${memType} 1 100 shared)
  (func (param $p ${ptrType}) (param $vi32 i32) (param $vi64 i64)
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.load${size}${sx} ${offs} (local.get $p))))
    (${ty}.atomic.store${size} ${offs} (local.get $p) (local.get $v${ty}))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.add${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.sub${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.and${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.or${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.xor${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.xchg${sx} ${offs} (local.get $p) (local.get $v${ty}))))
    (drop (${ty}.add (${ty}.const 1) (${ty}.atomic.rmw${size}.cmpxchg${sx} ${offs} (local.get $p) (local.get $v${ty}) (${ty}.const 37))))
))`)), memType == ptrType);
            }

        }
    }
}



print(WebAssembly.validate(print(`
(module
  (memory i32 1)
  (func (param $p i32)
    (drop (i32.load offset=0x100000000 (local.get $p)))))`)), false);




print(WebAssembly.validate(print(`
(module
  (memory i64 1)
  (func (param $p i64)
    (drop (i32.load offset=0x1000000000000 (local.get $p)))))`)), true);








if (getBuildConfiguration()["pointer-byte-size"] == 8) {
    
    

    try {
        new WebAssembly.Memory({index:"i64", initial:65536 * 1.5, maximum:65536 * 2});
    } catch (e) {
        
        if (!(e instanceof WebAssembly.RuntimeError) || !String(e).match(/too many memory pages/)) {
            throw e;
        }
    }
}



if (WebAssembly.Function) {
    
    
    

    let m64 = new WebAssembly.Memory({index:"i64", initial:1});
    print(m64.type().index, "i64");

    let m32 = new WebAssembly.Memory({initial:1});
    print(m32.type().index, "i32");

    let ins = new WebAssembly.Instance(new WebAssembly.Module(print(`
(module
  (memory (export "mem") i64 1 0x100000000))`)));
    print(ins.exports.mem.type().minimum, 1);
    print(ins.exports.mem.type().maximum, 0x100000000);
}



const SMALL = 64;  
const BIG = 131072;  
const HUGE = 2147483656; 
const VAST = 0x112001300;   

function makeTest(LOC, INITIAL, MAXIMUM, SHARED) {
    const v128Prefix =
` (func $stash (param v128)
    (v128.store (i64.const 0) (local.get 0)))

  (func $unstash (result v128)
    (v128.load (i64.const 0)))
`;

    const readV128Code =
` (func (export "readv128@0") (param $p i64)
    (call $stash (v128.load (local.get $p))))

  (func (export "readv128@small") (param $p i64)
    (call $stash (v128.load offset=${SMALL} (local.get $p))))

  (func (export "readv128@big") (param $p i64)
    (call $stash (v128.load offset=${BIG} (local.get $p))))

  (func (export "readv128@huge") (param $p i64)
    (call $stash (v128.load offset=${HUGE} (local.get $p))))

  (func (export "readv128/const@0")
    (call $stash (v128.load (i64.const ${LOC}))))

  (func (export "readv128/const@small")
    (call $stash (v128.load offset=${SMALL} (i64.const ${LOC}))))

  (func (export "readv128/const@big")
    (call $stash (v128.load offset=${BIG} (i64.const ${LOC}))))

  (func (export "v128.load_splat@small") (param $p i64)
    (call $stash (v128.load32_splat offset=${SMALL} (local.get $p))))

  (func (export "v128.load_zero@small") (param $p i64)
    (call $stash (v128.load32_zero offset=${SMALL} (local.get $p))))

  (func (export "v128.load_extend@small") (param $p i64)
    (call $stash (v128.load32x2_u offset=${SMALL} (local.get $p))))

  (func (export "v128.load_lane@small") (param $p i64)
    (call $stash (v128.load32_lane offset=${SMALL} 2 (local.get $p) (call $unstash))))
`;

    const writeV128Code =
` (func (export "writev128@0") (param $p i64)
    (v128.store (local.get $p) (call $unstash)))

  (func (export "writev128@small") (param $p i64)
    (v128.store offset=${SMALL} (local.get $p) (call $unstash)))

  (func (export "writev128@big") (param $p i64)
    (v128.store offset=${BIG} (local.get $p) (call $unstash)))

  (func (export "writev128@huge") (param $p i64)
    (v128.store offset=${HUGE} (local.get $p) (call $unstash)))

  (func (export "writev128/const@0")
    (v128.store (i64.const ${LOC}) (call $unstash)))

  (func (export "writev128/const@small")
    (v128.store offset=${SMALL} (i64.const ${LOC}) (call $unstash)))

  (func (export "writev128/const@big")
    (v128.store offset=${BIG} (i64.const ${LOC}) (call $unstash)))

  (func (export "v128.store_lane@small") (param $p i64)
    (v128.store32_lane offset=${SMALL} 2 (local.get $p) (call $unstash)))
`;

    const ins = print(`
(module
  (memory (export "mem") i64 ${INITIAL} ${MAXIMUM} ${SHARED})

  ;; About the test cases: there are various optimizations in the engine
  ;; for different shapes of a pointer+offset.  Constant pointers are
  ;; resolved early; large offsets are folded early using explicit code
  ;; with an overflow check (but "large" depends on 32-bit vs 64-bit);
  ;; wait/notify fold offsets early regardless; zero offsets lead to
  ;; tighter code with variable pointers; and don't get me started on
  ;; alignment checks.  These test cases are not exhaustive but aim
  ;; to test at least some things.

  ;; TODO: more sizes for all operations, though this is not critical
  ;; TODO: sign extending loads, again not critical

  ${wasmSimdEnabled() ? v128Prefix : ""}

  ;; Read i32
  (func (export "readi32@0") (param $p i64) (result i32)
    (i32.load (local.get $p)))

  (func (export "readi32@small") (param $p i64) (result i32)
    (i32.load offset=${SMALL} (local.get $p)))

  (func (export "readi32@big") (param $p i64) (result i32)
    (i32.load offset=${BIG} (local.get $p)))

  (func (export "readi32@huge") (param $p i64) (result i32)
    (i32.load offset=${HUGE} (local.get $p)))

  (func (export "readi32@vast") (param $p i64) (result i32)
    (i32.load offset=${VAST} (local.get $p)))

  (func (export "readi32/const@0") (result i32)
    (i32.load (i64.const ${LOC})))

  (func (export "readi32/const@small") (result i32)
    (i32.load offset=${SMALL} (i64.const ${LOC})))

  (func (export "readi32/const@big") (result i32)
    (i32.load offset=${BIG} (i64.const ${LOC})))

  (func (export "readi32/const@vast") (result i32)
    (i32.load offset=${VAST} (i64.const ${LOC})))

  ;; Read i64
  (func (export "readi64@0") (param $p i64) (result i64)
    (i64.load (local.get $p)))

  (func (export "readi64@small") (param $p i64) (result i64)
    (i64.load offset=${SMALL} (local.get $p)))

  (func (export "readi64@big") (param $p i64) (result i64)
    (i64.load offset=${BIG} (local.get $p)))

  (func (export "readi64@huge") (param $p i64) (result i64)
    (i64.load offset=${HUGE} (local.get $p)))

  (func (export "readi64@vast") (param $p i64) (result i64)
    (i64.load offset=${VAST} (local.get $p)))

  (func (export "readi64/const@0") (result i64)
    (i64.load (i64.const ${LOC})))

  (func (export "readi64/const@small") (result i64)
    (i64.load offset=${SMALL} (i64.const ${LOC})))

  (func (export "readi64/const@big") (result i64)
    (i64.load offset=${BIG} (i64.const ${LOC})))

  (func (export "readi64/const@vast") (result i64)
    (i64.load offset=${VAST} (i64.const ${LOC})))

  ;; Read v128
  ${wasmSimdEnabled() ? readV128Code : ""}

  ;; write i32
  (func (export "writei32@0") (param $p i64) (param $v i32)
    (i32.store (local.get $p) (local.get $v)))

  (func (export "writei32@small") (param $p i64) (param $v i32)
    (i32.store offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "writei32@big") (param $p i64) (param $v i32)
    (i32.store offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "writei32@huge") (param $p i64) (param $v i32)
    (i32.store offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "writei32@vast") (param $p i64) (param $v i32)
    (i32.store offset=${VAST} (local.get $p) (local.get $v)))

  (func (export "writei32/const@0") (param $v i32)
    (i32.store (i64.const ${LOC}) (local.get $v)))

  (func (export "writei32/const@small") (param $v i32)
    (i32.store offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "writei32/const@big") (param $v i32)
    (i32.store offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  (func (export "writei32/const@vast") (param $v i32)
    (i32.store offset=${VAST} (i64.const ${LOC}) (local.get $v)))

  ;; write i64
  (func (export "writei64@0") (param $p i64) (param $v i64)
    (i64.store (local.get $p) (local.get $v)))

  (func (export "writei64@small") (param $p i64) (param $v i64)
    (i64.store offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "writei64@big") (param $p i64) (param $v i64)
    (i64.store offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "writei64@huge") (param $p i64) (param $v i64)
    (i64.store offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "writei64@vast") (param $p i64) (param $v i64)
    (i64.store offset=${VAST} (local.get $p) (local.get $v)))

  (func (export "writei64/const@0") (param $v i64)
    (i64.store (i64.const ${LOC}) (local.get $v)))

  (func (export "writei64/const@small") (param $v i64)
    (i64.store offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "writei64/const@big") (param $v i64)
    (i64.store offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  (func (export "writei64/const@vast") (param $v i64)
    (i64.store offset=${VAST} (i64.const ${LOC}) (local.get $v)))

  ;; Read v128
  ${wasmSimdEnabled() ? writeV128Code : ""}

  ;; Atomic read i32

  (func (export "areadi32@0") (param $p i64) (result i32)
    (i32.atomic.load (local.get $p)))

  (func (export "areadi32@small") (param $p i64) (result i32)
    (i32.atomic.load offset=${SMALL} (local.get $p)))

  (func (export "areadi32@big") (param $p i64) (result i32)
    (i32.atomic.load offset=${BIG} (local.get $p)))

  (func (export "areadi32@huge") (param $p i64) (result i32)
    (i32.atomic.load offset=${HUGE} (local.get $p)))

  (func (export "areadi32@vast") (param $p i64) (result i32)
    (i32.atomic.load offset=${VAST} (local.get $p)))

  (func (export "areadi32/const@0") (result i32)
    (i32.atomic.load (i64.const ${LOC})))

  (func (export "areadi32/const@small") (result i32)
    (i32.atomic.load offset=${SMALL} (i64.const ${LOC})))

  (func (export "areadi32/const@big") (result i32)
    (i32.atomic.load offset=${BIG} (i64.const ${LOC})))

  (func (export "areadi32/const@vast") (result i32)
    (i32.atomic.load offset=${VAST} (i64.const ${LOC})))

  ;; Atomic read i64

  (func (export "areadi64@0") (param $p i64) (result i64)
    (i64.atomic.load (local.get $p)))

  (func (export "areadi64@small") (param $p i64) (result i64)
    (i64.atomic.load offset=${SMALL} (local.get $p)))

  (func (export "areadi64@big") (param $p i64) (result i64)
    (i64.atomic.load offset=${BIG} (local.get $p)))

  (func (export "areadi64@huge") (param $p i64) (result i64)
    (i64.atomic.load offset=${HUGE} (local.get $p)))

  (func (export "areadi64@vast") (param $p i64) (result i64)
    (i64.atomic.load offset=${VAST} (local.get $p)))

  (func (export "areadi64/const@0") (result i64)
    (i64.atomic.load (i64.const ${LOC})))

  (func (export "areadi64/const@small") (result i64)
    (i64.atomic.load offset=${SMALL} (i64.const ${LOC})))

  (func (export "areadi64/const@big") (result i64)
    (i64.atomic.load offset=${BIG} (i64.const ${LOC})))

  (func (export "areadi64/const@vast") (result i64)
    (i64.atomic.load offset=${VAST} (i64.const ${LOC})))

  ;; Atomic write i32

  (func (export "awritei32@0") (param $p i64) (param $v i32)
    (i32.atomic.store (local.get $p) (local.get $v)))

  (func (export "awritei32@small") (param $p i64) (param $v i32)
    (i32.atomic.store offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "awritei32@big") (param $p i64) (param $v i32)
    (i32.atomic.store offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "awritei32@huge") (param $p i64) (param $v i32)
    (i32.atomic.store offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "awritei32@vast") (param $p i64) (param $v i32)
    (i32.atomic.store offset=${VAST} (local.get $p) (local.get $v)))

  (func (export "awritei32/const@0") (param $v i32)
    (i32.atomic.store (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei32/const@small") (param $v i32)
    (i32.atomic.store offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei32/const@big") (param $v i32)
    (i32.atomic.store offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei32/const@vast") (param $v i32)
    (i32.atomic.store offset=${VAST} (i64.const ${LOC}) (local.get $v)))

  ;; Atomic write i64

  (func (export "awritei64@0") (param $p i64) (param $v i64)
    (i64.atomic.store (local.get $p) (local.get $v)))

  (func (export "awritei64@small") (param $p i64) (param $v i64)
    (i64.atomic.store offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "awritei64@big") (param $p i64) (param $v i64)
    (i64.atomic.store offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "awritei64@huge") (param $p i64) (param $v i64)
    (i64.atomic.store offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "awritei64@vast") (param $p i64) (param $v i64)
    (i64.atomic.store offset=${VAST} (local.get $p) (local.get $v)))

  (func (export "awritei64/const@0") (param $v i64)
    (i64.atomic.store (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei64/const@small") (param $v i64)
    (i64.atomic.store offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei64/const@big") (param $v i64)
    (i64.atomic.store offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  (func (export "awritei64/const@vast") (param $v i64)
    (i64.atomic.store offset=${VAST} (i64.const ${LOC}) (local.get $v)))

  ;; xchg i32

  (func (export "xchgi32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xchg (local.get $p) (local.get $v)))

  (func (export "xchgi32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xchg offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "xchgi32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xchg offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "xchgi32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xchg offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "xchgi32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.xchg (i64.const ${LOC}) (local.get $v)))

  (func (export "xchgi32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.xchg offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "xchgi32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.xchg offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; xchg i64

  (func (export "xchgi64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xchg (local.get $p) (local.get $v)))

  (func (export "xchgi64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xchg offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "xchgi64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xchg offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "xchgi64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xchg offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "xchgi64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.xchg (i64.const ${LOC}) (local.get $v)))

  (func (export "xchgi64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.xchg offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "xchgi64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.xchg offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; add i32

  (func (export "addi32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.add (local.get $p) (local.get $v)))

  (func (export "addi32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.add offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "addi32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.add offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "addi32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.add offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "addi32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.add (i64.const ${LOC}) (local.get $v)))

  (func (export "addi32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.add offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "addi32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.add offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; add i64

  (func (export "addi64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.add (local.get $p) (local.get $v)))

  (func (export "addi64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.add offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "addi64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.add offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "addi64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.add offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "addi64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.add (i64.const ${LOC}) (local.get $v)))

  (func (export "addi64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.add offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "addi64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.add offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; sub i32

  (func (export "subi32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.sub (local.get $p) (local.get $v)))

  (func (export "subi32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.sub offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "subi32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.sub offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "subi32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.sub offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "subi32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.sub (i64.const ${LOC}) (local.get $v)))

  (func (export "subi32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.sub offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "subi32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.sub offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; sub i64

  (func (export "subi64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.sub (local.get $p) (local.get $v)))

  (func (export "subi64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.sub offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "subi64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.sub offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "subi64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.sub offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "subi64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.sub (i64.const ${LOC}) (local.get $v)))

  (func (export "subi64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.sub offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "subi64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.sub offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; and i32

  (func (export "andi32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.and (local.get $p) (local.get $v)))

  (func (export "andi32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.and offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "andi32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.and offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "andi32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.and offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "andi32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.and (i64.const ${LOC}) (local.get $v)))

  (func (export "andi32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.and offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "andi32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.and offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; and i64

  (func (export "andi64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.and (local.get $p) (local.get $v)))

  (func (export "andi64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.and offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "andi64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.and offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "andi64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.and offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "andi64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.and (i64.const ${LOC}) (local.get $v)))

  (func (export "andi64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.and offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "andi64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.and offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; or i32

  (func (export "ori32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.or (local.get $p) (local.get $v)))

  (func (export "ori32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.or offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "ori32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.or offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "ori32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.or offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "ori32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.or (i64.const ${LOC}) (local.get $v)))

  (func (export "ori32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.or offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "ori32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.or offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; or i64

  (func (export "ori64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.or (local.get $p) (local.get $v)))

  (func (export "ori64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.or offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "ori64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.or offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "ori64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.or offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "ori64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.or (i64.const ${LOC}) (local.get $v)))

  (func (export "ori64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.or offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "ori64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.or offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; xor i32

  (func (export "xori32@0") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xor (local.get $p) (local.get $v)))

  (func (export "xori32@small") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xor offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "xori32@big") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xor offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "xori32@huge") (param $p i64) (param $v i32) (result i32)
    (i32.atomic.rmw.xor offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "xori32/const@0") (param $v i32) (result i32)
    (i32.atomic.rmw.xor (i64.const ${LOC}) (local.get $v)))

  (func (export "xori32/const@small") (param $v i32) (result i32)
    (i32.atomic.rmw.xor offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "xori32/const@big") (param $v i32) (result i32)
    (i32.atomic.rmw.xor offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; xor i64

  (func (export "xori64@0") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xor (local.get $p) (local.get $v)))

  (func (export "xori64@small") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xor offset=${SMALL} (local.get $p) (local.get $v)))

  (func (export "xori64@big") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xor offset=${BIG} (local.get $p) (local.get $v)))

  (func (export "xori64@huge") (param $p i64) (param $v i64) (result i64)
    (i64.atomic.rmw.xor offset=${HUGE} (local.get $p) (local.get $v)))

  (func (export "xori64/const@0") (param $v i64) (result i64)
    (i64.atomic.rmw.xor (i64.const ${LOC}) (local.get $v)))

  (func (export "xori64/const@small") (param $v i64) (result i64)
    (i64.atomic.rmw.xor offset=${SMALL} (i64.const ${LOC}) (local.get $v)))

  (func (export "xori64/const@big") (param $v i64) (result i64)
    (i64.atomic.rmw.xor offset=${BIG} (i64.const ${LOC}) (local.get $v)))

  ;; cmpxchg i32

  (func (export "cmpxchgi32@0") (param $p i64) (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32@small") (param $p i64) (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg offset=${SMALL} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32@big") (param $p i64) (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg offset=${BIG} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32@huge") (param $p i64) (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg offset=${HUGE} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32/const@0") (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32/const@small") (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg offset=${SMALL} (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi32/const@big") (param $expect i32) (param $new i32) (result i32)
    (i32.atomic.rmw.cmpxchg offset=${BIG} (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  ;; cmpxchg i64

  (func (export "cmpxchgi64@0") (param $p i64) (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64@small") (param $p i64) (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg offset=${SMALL} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64@big") (param $p i64) (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg offset=${BIG} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64@huge") (param $p i64) (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg offset=${HUGE} (local.get $p) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64/const@0") (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64/const@small") (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg offset=${SMALL} (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  (func (export "cmpxchgi64/const@big") (param $expect i64) (param $new i64) (result i64)
    (i64.atomic.rmw.cmpxchg offset=${BIG} (i64.const ${LOC}) (local.get $expect) (local.get $new)))

  ;; wait

  (func (export "waiti32@small") (param $p i64) (result i32)
    (memory.atomic.wait32 offset=${SMALL} (local.get $p) (i32.const 1) (i64.const 0)))

  (func (export "waiti32@huge") (param $p i64) (result i32)
    (memory.atomic.wait32 offset=${HUGE} (local.get $p) (i32.const 1) (i64.const 0)))

  (func (export "waiti64@small") (param $p i64) (result i32)
    (memory.atomic.wait64 offset=${SMALL} (local.get $p) (i64.const 1) (i64.const 0)))

  (func (export "waiti64@huge") (param $p i64) (result i32)
    (memory.atomic.wait64 offset=${HUGE} (local.get $p) (i64.const 1) (i64.const 0)))

  ;; wake

  (func (export "wake@0") (param $p i64) (result i32)
    (memory.atomic.notify (local.get $p) (i32.const 1)))

  (func (export "wake@small") (param $p i64) (result i32)
    (memory.atomic.notify offset=${SMALL} (local.get $p) (i32.const 1)))

  (func (export "wake@big") (param $p i64) (result i32)
    (memory.atomic.notify offset=${BIG} (local.get $p) (i32.const 1)))

  (func (export "wake@huge") (param $p i64) (result i32)
    (memory.atomic.notify offset=${HUGE} (local.get $p) (i32.const 1)))
)
`);
    return ins;
}

function i32Random() {
    
    for (;;) {
        let r = (Math.random() * 0x3FFF_FFFF) | 0;
        if (r != 0)
            return r;
    }
}

function i64Random() {
    return (BigInt(i32Random()) << 32n) | BigInt(i32Random());
}

function Random(sz) {
    if (sz == 4)
        return i32Random();
    return i64Random();
}

function Random2(sz) {
    return [Random(sz), Random(sz)];
}

function Random4(sz) {
    return [Random(sz), Random(sz), Random(sz), Random(sz)];
}

function Zero(sz) {
    if (sz == 4)
        return 0;
    return 0n;
}

function testRead(ins, mem, LOC, prefix) {
    let r = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let NM = prefix + "readi" + (SZ * 8);

    

    r = Random(SZ);
    mem[LOC / SZ] = r;
    print(ins.exports[NM + "@0"](BigInt(LOC)), r);
    print(ins.exports[NM + "/const@0"](), r);

    mem[(len / SZ) - 1] = Zero(SZ);
    print(ins.exports[NM + "@0"](BigInt(len - SZ)), Zero(SZ)); 

    r = Random(SZ);
    mem[(LOC + SMALL) / SZ] = r;
    print(ins.exports[NM + "@small"](BigInt(LOC)), r);
    print(ins.exports[NM + "/const@small"](), r);

    if (len >= LOC + BIG + SZ) {
        r = Random(SZ);
        mem[(LOC + BIG) / SZ] = r;
        print(ins.exports[NM + "@big"](BigInt(LOC)), r);
        print(ins.exports[NM + "/const@big"](), r);
    }

    if (len >= LOC + VAST + SZ) {
        r = Random(SZ);
        mem[(LOC + VAST) / SZ] = r;
        print(ins.exports[NM + "@vast"](BigInt(LOC)), r);
        print(ins.exports[NM + "/const@vast"](), r);
    }

    

    print(() => ins.exports[NM + "@0"](BigInt(len)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[NM + "@0"](BigInt(len-(SZ-1))),
                       WebAssembly.RuntimeError,
                       prefix == "" ? /out of bounds/ : /unaligned memory access/);

    
    
    if (len < 0x1_0000_0000) {
        print(() => ins.exports[NM + "@0"](0x1_0000_0000n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    if (len < HUGE) {
        print(() => ins.exports[NM + "@huge"](0n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    if (len < VAST) {
        print(() => ins.exports[NM + "@vast"](0n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }
}

function testReadV128(ins, mem, LOC) {
    let r = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let NM = "readv128";

    print(SZ, 4);

    

    r = Random4(4);
    mem.set(r, LOC / SZ);
    ins.exports[NM + "@0"](BigInt(LOC))
    assertSame(mem.slice(0, 4), r);
    ins.exports[NM + "/const@0"]();
    assertSame(mem.slice(0, 4), r);

    r = new Int32Array([0,0,0,0]);
    mem.set(r, (len / SZ) - 4);
    ins.exports[NM + "@0"](BigInt(len - (SZ * 4)));  
    assertSame(mem.slice(0, 4), r);

    r = Random4(SZ);
    mem.set(r, (LOC + SMALL) / SZ);
    ins.exports[NM + "@small"](BigInt(LOC))
    assertSame(mem.slice(0, 4), r);
    ins.exports[NM + "/const@small"]();
    assertSame(mem.slice(0, 4), r);

    if (len >= LOC + BIG + SZ * 4) {
        r = Random4(SZ);
        mem.set(r, (LOC + BIG) / SZ);
        ins.exports[NM + "@big"](BigInt(LOC));
        assertSame(mem.slice(0, 4), r);
        ins.exports[NM + "/const@big"]();
        assertSame(mem.slice(0, 4), r);
    }

    

    print(() => ins.exports[NM + "@0"](BigInt(len)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[NM + "@0"](BigInt(len-((SZ*4)-1))),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    
    
    if (len < 0x1_0000_0000) {
        print(() => ins.exports[NM + "@0"](0x1_0000_0000n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    if (len < HUGE) {
        print(() => ins.exports[NM + "@huge"](0n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    

    r = i32Random()
    mem[(LOC + SMALL) / SZ] = r;
    ins.exports["v128.load_splat@small"](BigInt(LOC));
    assertSame(mem.slice(0, 4), [r, r, r, r]);

    r = i32Random()
    mem[(LOC + SMALL) / SZ] = r;
    ins.exports["v128.load_zero@small"](BigInt(LOC));
    assertSame(mem.slice(0, 4), [r, 0, 0, 0]);

    r = Random2(SZ)
    mem.set(r, (LOC + SMALL) / SZ);
    ins.exports["v128.load_extend@small"](BigInt(LOC));
    assertSame(mem.slice(0, 4), [r[0], 0, r[1], 0]);

    r = Random4(SZ)
    mem.set(r, 0);
    let s = i32Random()
    mem[(LOC + SMALL) / SZ] = s;
    ins.exports["v128.load_lane@small"](BigInt(LOC));
    assertSame(mem.slice(0, 4), [r[0], r[1], s, r[3]]);
}

function testWrite(ins, mem, LOC, prefix) {
    let r = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let WNM = prefix + "writei" + (SZ * 8);
    let RNM = prefix + "readi" + (SZ * 8);

    

    r = Random(SZ);
    ins.exports[WNM + "@0"](BigInt(LOC), r);
    print(ins.exports[RNM + "@0"](BigInt(LOC)), r);

    r = Random(SZ);
    ins.exports[WNM + "@small"](BigInt(LOC), r);
    print(ins.exports[RNM + "@small"](BigInt(LOC)), r);

    if (len >= LOC + BIG + SZ) {
        r = Random(SZ);
        ins.exports[WNM + "@big"](BigInt(LOC), r);
        print(ins.exports[RNM + "@big"](BigInt(LOC)), r);
    }

    if (len >= LOC + VAST + SZ) {
        r = Random(SZ);
        ins.exports[WNM + "@vast"](BigInt(LOC), r);
        print(ins.exports[RNM + "@vast"](BigInt(LOC)), r);
    }

    r = Random(SZ);
    ins.exports[WNM + "@0"](BigInt(len - SZ), r); 
    print(ins.exports[RNM + "@0"](BigInt(len - SZ)), r);

    

    print(() => ins.exports[WNM + "@0"](BigInt(len), Random(SZ)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[WNM + "@0"](BigInt(len - (SZ - 1)), Random(SZ)),
                       WebAssembly.RuntimeError,
                       prefix == "" ? /out of bounds/ : /unaligned memory access/);

    if (len < 0x1_0000_0000) {
        let xs = ins.exports[RNM + "@0"](0n);
        print(() => ins.exports[WNM + "@0"](0x1_0000_0000n, Random(SZ)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
        
        print(ins.exports[RNM + "@0"](0n), xs);
    }

    if (len < HUGE) {
        print(() => ins.exports[WNM + "@huge"](0n, Random(SZ)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    if (len < VAST) {
        print(() => ins.exports[WNM + "@vast"](0n, Random(SZ)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }
}

function testWriteV128(ins, mem, LOC) {
    let r = 0;
    let p = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let WNM = "writev128";
    let RNM = "readv128";

    print(SZ, 4);

    

    r = Random4(SZ);
    mem.set(r, 0);
    p = LOC / SZ;
    ins.exports[WNM + "@0"](BigInt(LOC));
    assertSame(mem.slice(p, p + 4), r);

    r = Random4(SZ);
    mem.set(r, 0);
    p = (LOC + SMALL) / SZ;
    ins.exports[WNM + "@small"](BigInt(LOC));
    assertSame(mem.slice(p, p + 4), r);

    if (len >= LOC + BIG + SZ) {
        r = Random4(SZ);
        mem.set(r, 0);
        p = (LOC + BIG) / SZ;
        ins.exports[WNM + "@big"](BigInt(LOC));
        assertSame(mem.slice(p, p + 4), r);
    }

    r = Random4(SZ);
    mem.set(r, 0);
    p = (len - (SZ * 4)) / SZ;
    ins.exports[WNM + "@0"](BigInt(len - (SZ * 4))); 
    assertSame(mem.slice(p, p + 4), r);

    

    print(() => ins.exports[WNM + "@0"](BigInt(len)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[WNM + "@0"](BigInt(len - ((SZ * 4) - 1))),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    if (len < HUGE) {
        print(() => ins.exports[WNM + "@huge"](0n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }

    

    r = Random4(SZ);
    mem.set(r, 0);
    ins.exports["v128.store_lane@small"](BigInt(LOC));
    print(mem[(LOC + SMALL) / SZ], r[2]);
}

function testAtomicRMW(ins, mem, LOC, op, fn) {
    let r = 0, s = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let NM = op + "i" + (SZ * 8);

    [r,s] = Random2(SZ);
    mem[LOC / SZ] = r;
    print(ins.exports[NM + "@0"](BigInt(LOC), s), r);
    print(mem[LOC / SZ], fn(r, s));

    [r,s] = Random2(SZ);
    mem[(LOC + SMALL) / SZ] = r;
    print(ins.exports[NM + "@small"](BigInt(LOC), s), r);
    print(mem[(LOC + SMALL) / SZ], fn(r, s));

    if (len >= LOC + BIG + SZ) {
        [r,s] = Random2(SZ);
        mem[(LOC + BIG) / SZ] = r;
        print(ins.exports[NM + "@big"](BigInt(LOC), s), r);
        print(mem[(LOC + BIG) / SZ], fn(r, s));
    }


    print(() => ins.exports[NM + "@0"](BigInt(len), Zero(SZ)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[NM + "@0"](BigInt(len - (SZ - 1)), Zero(SZ)),
                       WebAssembly.RuntimeError,
                       /unaligned memory access/);

    if (len < HUGE) {
        print(() => ins.exports[NM + "@huge"](0n, Zero(SZ)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }
}

function testAtomicCmpxchg(ins, mem, LOC) {
    let r = 0, s = 0;
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;
    let NM = "cmpxchgi" + (SZ * 8);

    [r,s] = Random2(SZ);
    mem[LOC / SZ] = r;
    print(ins.exports[NM + "@0"](BigInt(LOC), Zero(SZ), s), r);
    print(ins.exports[NM + "@0"](BigInt(LOC), r, s), r);
    print(mem[LOC / SZ], s);

    [r,s] = Random2(SZ);
    mem[(LOC + SMALL) / SZ] = r;
    print(ins.exports[NM + "@0"](BigInt(LOC + SMALL), Zero(SZ), s), r);
    print(ins.exports[NM + "@0"](BigInt(LOC + SMALL), r, s), r);
    print(mem[(LOC + SMALL) / SZ], s);

    if (len >= LOC + BIG + SZ) {
        [r,s] = Random2(SZ);
        mem[(LOC + BIG) / SZ] = r;
        print(ins.exports[NM + "@0"](BigInt(LOC + BIG), Zero(SZ), s), r);
        print(ins.exports[NM + "@0"](BigInt(LOC + BIG), r, s), r);
        print(mem[(LOC + BIG) / SZ], s);
    }

    print(() => ins.exports[NM + "@0"](BigInt(len), Zero(SZ), Zero(SZ)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports[NM + "@0"](BigInt(len - (SZ - 1)), Zero(SZ), Zero(SZ)),
                       WebAssembly.RuntimeError,
                       /unaligned memory access/);

    if (len < HUGE) {
        print(() => ins.exports[NM + "@huge"](0n, Zero(SZ), Zero(SZ)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }
}

function testAtomicWake(ins, mem, LOC) {
    let SZ = mem.BYTES_PER_ELEMENT;
    let len = mem.length * SZ;

    print(ins.exports["wake@0"](BigInt(LOC)), 0);
    print(ins.exports["wake@small"](BigInt(LOC)), 0);
    if (len >= LOC + BIG + SZ) {
        print(ins.exports["wake@big"](BigInt(LOC)), 0);
    }

    print(() => ins.exports["wake@0"](BigInt(len)),
                       WebAssembly.RuntimeError,
                       /out of bounds/);

    print(() => ins.exports["wake@0"](BigInt(len - (SZ - 1))),
                       WebAssembly.RuntimeError,
                       /unaligned memory access/);

    if (len < HUGE) {
        print(() => ins.exports["wake@huge"](BigInt(LOC)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
    }
}




let configs = [[40, 0, 3], [40, 3, '']];


if (getBuildConfiguration()["pointer-byte-size"] == 8) {
    configs.push([Math.pow(2, 31) + 40, 32771, '']);
    configs.push([Math.pow(2, 32) + 40, 65539, '']);
    configs.push([Math.pow(2, 31) + 40, 32771, 32773]);
    configs.push([Math.pow(2, 32) + 40, 65539, 65541]);
}

for ( let shared of ['','shared'] ) {
    for (let [LOC, start, max] of configs) {
        if (shared != '' && max == '') {
            continue;
        }
        const ins = makeTest(LOC, start, max, shared);
        if (max != '') {
            
            let res = ins.exports.mem.grow(max - start);
            if (res == -1) {
                print("SPURIOUS OOM");
                continue;
            }
            print(res, start);
        }

        const mem32 = new Int32Array(ins.exports.mem.buffer);
        const mem64 = new BigInt64Array(ins.exports.mem.buffer);

        for ( let m of [mem32, mem64] ) {
            testRead(ins, m, LOC, "");
            testWrite(ins, m, LOC, "");
            testRead(ins, m, LOC, "a");
            testWrite(ins, m, LOC, "a");
            testAtomicRMW(ins, m, LOC, "add", (r,s) => r+s);
            testAtomicRMW(ins, m, LOC, "sub", (r,s) => r-s);
            testAtomicRMW(ins, m, LOC, "and", (r,s) => r&s);
            testAtomicRMW(ins, m, LOC, "or", (r,s) => r|s);
            testAtomicRMW(ins, m, LOC, "xor", (r,s) => r^s);
            testAtomicRMW(ins, m, LOC, "xchg", (r,s) => s);
            testAtomicCmpxchg(ins, m, LOC);
            testAtomicWake(ins, m, LOC);
        }

        if (wasmSimdEnabled()) {
            testReadV128(ins, mem32, LOC);
            testWriteV128(ins, mem32, LOC);
        }
    }
}



function makeModule(initial, maximum, shared) {
    return `
(module
  (memory (export "mem") i64 ${initial} ${maximum} ${shared})

  (data $seg "0123456789")

  (func (export "size") (result i64)
    memory.size)

  (func (export "grow") (param $delta i64) (result i64)
    (memory.grow (local.get $delta)))

  (func (export "copy") (param $to i64) (param $from i64) (param $len i64)
    (memory.copy (local.get $to) (local.get $from) (local.get $len)))

  (func (export "fill") (param $to i64) (param $val i32) (param $len i64)
    (memory.fill (local.get $to) (local.get $val) (local.get $len)))

  (func (export "init") (param $to i64) (param $src i32) (param $count i32)
    (memory.init $seg (local.get $to) (local.get $src) (local.get $count)))
)`;
}

for ( let shared of ['','shared'] ) {
    let ins = print(makeModule(1, 3, shared));

    print(ins.exports.size(), 1n);

    
    print(ins.exports.grow(2n), 1n);
    print(ins.exports.size(), 3n);

    
    print(ins.exports.grow(1n), -1n);
    print(ins.exports.size(), 3n);

    
    print(ins.exports.grow(100000n), -1n);
    print(ins.exports.size(), 3n);

    
    print(ins.exports.grow(0x1_0000_0000_0000n), -1n);
    print(ins.exports.size(), 3n);

    
    print(ins.exports.grow(-1n), -1n);
    print(ins.exports.size(), 3n);

    var mem = new Uint8Array(ins.exports.mem.buffer);
    var val = [1,2,3,4,5];
    mem.set(val, 20);
    ins.exports.copy(40n, 20n, 5n);
    assertSame(val, mem.slice(40, 45));

    ins.exports.fill(39n, 37, 8n);
    assertSame(iota(8).map(_ => 37), mem.slice(39, 47));

    ins.exports.init(128n, 1, 5);
    assertSame(iota(5).map(x => x+49), mem.slice(128, 133));
}

if (getBuildConfiguration()["pointer-byte-size"] == 8) {
    for ( let shared of ['','shared'] ) {
        let limit = wasmMaxMemoryPages('i64');
        let initial = 65537;
        let maximum = limit + 1;
        let pagesize = 65536n;

        let ins = print(makeModule(initial, maximum, shared));

        print(ins.exports.size(), BigInt(initial));

        
        {
            let res = ins.exports.grow(2n);
            if (res == -1) {
                print("SPURIOUS OOM");
                continue;
            }
            print(res, BigInt(initial));
        }
        print(ins.exports.size(), BigInt(initial + 2));

        
        print(ins.exports.grow(BigInt(limit - (initial + 2) + 1)), -1n);
        print(ins.exports.size(), BigInt(initial + 2));

        
        {
            let res = ins.exports.grow(BigInt(limit - (initial + 2)));
            if (res == -1) {
                print("SPURIOUS OOM");
                continue;
            }
            print(res, BigInt(initial + 2));
        }
        print(ins.exports.size(), BigInt(limit));

        let mem = new Uint8Array(ins.exports.mem.buffer);

        let copyval = [1,2,3,4,5];
        let source = 20n;
        let target = BigInt(initial) * pagesize + 40n;
        let oobTarget = BigInt(limit) * pagesize - 1n;

        
        mem.set(copyval, Number(source));
        ins.exports.copy(target, source, BigInt(copyval.length));
        assertSame(copyval, mem.slice(Number(target), Number(target) + copyval.length))

        
        
        print(() => ins.exports.copy(oobTarget, source, BigInt(copyval.length)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
        print(mem[Number(oobTarget-1n)], 0);
        print(() => ins.exports.copy(-1n, source, BigInt(copyval.length)),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
        print(mem[Number(oobTarget-1n)], 0);

        
        ins.exports.fill(target, 37, 30n);
        assertSame(iota(30).map(_ => 37), mem.slice(Number(target), Number(target) + 30));

        
        print(() => ins.exports.fill(oobTarget, 37, 2n),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
        print(mem[Number(oobTarget-1n)], 0);

        
        ins.exports.init(target, 1, 5);
        assertSame(iota(5).map(x => x+49), mem.slice(Number(target), Number(target)+5));

        
        print(() => ins.exports.init(oobTarget, 1, 5),
                           WebAssembly.RuntimeError,
                           /out of bounds/);
        print(mem[Number(oobTarget-1n)], 0);
    }
}
