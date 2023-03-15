






var builder = new WasmModuleBuilder();
builder.addTag(kSig_v_v);
builder.addFunction("propel", kSig_v_v)
       .addBody([kExprThrow, 0])
       .exportFunc();
var instance = builder.instantiate();


var exception;
try {
  instance.exports.propel();
} catch (e) {
  exception = e;
}




print(exception, WebAssembly.Exception);
print([], Object.getOwnPropertyNames(exception));
