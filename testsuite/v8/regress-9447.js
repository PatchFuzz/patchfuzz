



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let kSig_s_v = makeSig([], [kWasmS128]);


var fun1 = (function GenerateFun1() {
  let builder = new WasmModuleBuilder();
  function fun() { return 0 }
  let fun_index = builder.addImport('m', 'fun', kSig_s_v)
  builder.addExport("fun", fun_index);
  let instance = builder.instantiate({ m: { fun: fun }});
  return instance.exports.fun;
})();



var fun2 = (function GenerateFun2() {
  let builder = new WasmModuleBuilder();
  let fun_index = builder.addImport("m", "fun", kSig_s_v)
  builder.addFunction('main', kSig_v_v)
      .addBody([
        kExprCallFunction, fun_index,
        kExprDrop
      ])
      .exportFunc();
  let instance = builder.instantiate({ m: { fun: fun1 }});
  return instance.exports.main;
})();


assertThrows(fun1, TypeError,
             /type incompatibility when transforming from\/to JS/);
assertThrows(fun2, TypeError,
             /type incompatibility when transforming from\/to JS/);
