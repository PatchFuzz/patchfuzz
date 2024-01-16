





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function testLazyModuleStreamingCompilation() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("some", kSig_i_ii);
  let bytes = builder.toBuffer();
  assertPromiseResult(WebAssembly.compileStreaming(Promise.resolve(bytes))
                          .then(
                              assertUnreachable,
                              error => assertEquals(
                                  'WebAssembly.compileStreaming(): Compiling ' +
                                      'function #0:"some" failed: function ' +
                                      'body must end with "end" opcode @+26',
                                  error.message)));
})();
