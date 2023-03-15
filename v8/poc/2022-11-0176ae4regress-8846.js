







(function TestAsyncCompileTagSection() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  let except = builder.addTag(kSig_v_v);
  builder.addFunction("thrw", kSig_v_v)
      .addBody([
        kExprThrow, except,
      ]).exportFunc();
  function step1(buffer) {
    print(WebAssembly.compile(buffer), module => step2(module));
  }
  function step2(module) {
    print(WebAssembly.instantiate(module), inst => step3(inst));
  }
  function step3(instance) {
    print(() => instance.exports.thrw(), WebAssembly.Exception);
  }
  step1(builder.toBuffer());
})();
