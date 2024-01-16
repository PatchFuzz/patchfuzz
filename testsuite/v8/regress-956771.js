





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function testLazyModuleAsyncCompilation() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("some", kSig_i_ii)
  assertPromiseResult(
      WebAssembly.compile(builder.toBuffer())
          .then(
              assertUnreachable,
              error => assertEquals(
                  'WebAssembly.compile(): Compiling function #0:"some" ' +
                      'failed: function body must end with "end" opcode @+26',
                  error.message)));
})();

(function testLazyModuleSyncCompilation() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("some", kSig_i_ii)
  assertThrows(
      () => builder.toModule(), WebAssembly.CompileError,
      'WebAssembly.Module(): Compiling function #0:"some" failed: function ' +
          'body must end with "end" opcode @+26');
})();
