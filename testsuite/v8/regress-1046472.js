





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false);
  builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
  
  builder.addFunction('main', 0 )
    .addBodyWithEnd([


kExprI32Const, 0x20,
kExprI64LoadMem, 0x00, 0xce, 0xf2, 0xff, 0x01,
kExprBlock, kWasmF32,   
  kExprI32Const, 0x04,
  kExprI32Const, 0x01,
  kExprBrTable, 0x01, 0x01, 0x00, 
  kExprEnd,   
kExprUnreachable,
kExprEnd,   
            ]);
  builder.addExport('main', 0);
  assertThrows(
      () => {builder.toModule()}, WebAssembly.CompileError,
      'WebAssembly.Module(): Compiling function #0:\"main\" failed: ' +
      'type error in branch[0] (expected f32, got i32) @+57');
})();
