





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');






const builder = new WasmModuleBuilder();
const sig_index = builder.addType(kSig_v_v);
builder.addImport('e', 'f', sig_index);
builder.addExport('f', 0);
let instance = builder.instantiate(
    {e: {f: function() {}}}
);


const f = instance.exports['f'];
function invoke_vv(index) {
  return f();
}

%PrepareFunctionForOptimization(invoke_vv);
invoke_vv(0);
%OptimizeFunctionOnNextCall(invoke_vv);
invoke_vv(0);
