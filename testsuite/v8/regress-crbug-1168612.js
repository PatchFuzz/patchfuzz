





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

function getMain() {
  var builder = new WasmModuleBuilder();
  builder.addFunction("main", kSig_v_v)
    .addBody([kExprUnreachable])
    .exportAs("main");
  return builder.instantiate().exports.main;
}
let foo = getMain();

function loop() {
  for (let i = 0; i < 2; i++) {
    try {
       foo();
    } catch (e) {
      if (i) {
        throw e;
      }
    }
  }
}
%PrepareFunctionForOptimization(loop);
assertThrows(loop, WebAssembly.RuntimeError, "unreachable");
%OptimizeFunctionOnNextCall(loop);
assertThrows(loop, WebAssembly.RuntimeError, "unreachable");
