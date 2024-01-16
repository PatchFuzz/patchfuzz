



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");


var error = new Error("my error");
error.__proto__ = new Proxy(new Error(), {
  has(target, property, receiver) {
    assertUnreachable();
  }
});


var builder = new WasmModuleBuilder();
builder.addImport('mod', 'fun', kSig_v_v);
builder.addFunction("funnel", kSig_v_v)
       .addBody([kExprCallFunction, 0])
       .exportFunc();
var instance = builder.instantiate({ mod: {fun: function() { throw error }}});
assertThrows(instance.exports.funnel, Error);
