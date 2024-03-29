



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js')
let obj = {};
let proxy = new Proxy(obj, {});
let builder = new WasmModuleBuilder();
builder.addType(kSig_v_v);
let imports = builder.addImport("m","f", kSig_v_v);
let exception = builder.addTag(kSig_v_v);
builder.addFunction("foo", kSig_v_v)
    .addBody([
        kExprTry,
        kWasmVoid,
        kExprCallFunction, imports,
        kExprCatch, exception,
        kExprEnd]
        ).exportFunc();
let inst = builder.instantiate({
  m: {
    f: function () {
      throw proxy;
    }
  }
});
assertThrows(inst.exports.foo);
