







var conf = getBuildConfiguration();
if (conf.arm64 || conf["arm64-simulator"] || conf.arm || conf["arm-simulator"])
    quit(0);

function get(arr, loc, len) {
    let res = [];
    for ( let i=0; i < len; i++ ) {
        res.push(arr[loc+i]);
    }
    return res;
}

for ( let offset of iota(16) ) {
    var ins = wasmEvalText(`
  (module
    (memory (export "mem") 1 1)
    (func (export "f") (param $loc i32)
      (v128.store offset=${offset} (local.get $loc) (v128.const i32x4 ${1+offset} 2 3 ${4+offset*2}))))`);

    
    assertErrorMessage(() => ins.exports.f(65536-15),
                       WebAssembly.RuntimeError,
                       /index out of bounds/)

    
    let start = 65536 - 15 + offset;
    let legalBytes = 65536 - start;
    var mem8 = new Uint8Array(ins.exports.mem.buffer);
    assertSame(get(mem8, start, legalBytes), iota(legalBytes).map((_) => 0));
}
