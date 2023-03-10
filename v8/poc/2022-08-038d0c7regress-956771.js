







(function testLazyModuleAsyncCompilation() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("some", kSig_i_ii)
  print(
      WebAssembly.compile(builder.toBuffer())
          .then(
              print,
              error => print(
                  'WebAssembly.compile(): Compiling function #0:"some" ' +
                      'failed: function body must end with "end" opcode @+26',
                  error.message)));
})();

(function testLazyModuleSyncCompilation() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("some", kSig_i_ii)
  print(
      () => builder.toModule(), WebAssembly.CompileError,
      'WebAssembly.Module(): Compiling function #0:"some" failed: function ' +
          'body must end with "end" opcode @+26');
})();
