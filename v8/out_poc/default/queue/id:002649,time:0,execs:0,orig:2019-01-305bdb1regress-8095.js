






var error = new Error("my error");
error.__proto__ = new Proxy(new Error(), {
  has(target, property, receiver) {
    print();
  }
});


var builder = new WasmModuleBuilder();
builder.addImport('mod', 'fun', kSig_v_v);
builder.addFunction("funnel", kSig_v_v)
       .addBody([kExprCallFunction, 0])
       .exportFunc();
var instance = builder.instantiate({ mod: {fun: function() { throw error }}});
print(instance.exports.funnel, Error);
