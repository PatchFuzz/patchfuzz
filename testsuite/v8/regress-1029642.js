









d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js')

const builder = new WasmModuleBuilder();
builder.addMemory(0, 0, false);
builder.addType(makeSig([kWasmF32, kWasmF32, kWasmF64], [kWasmF64]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprLoop, kWasmF64,   
  kExprLoop, kWasmF64,   
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprI32Const, 0,
    kExprIf, kWasmF64,   
      kExprLoop, kWasmF64,   
        kExprI32Const, 0,
        kExprIf, kWasmI32,   
          kExprMemorySize, 0x00,
          kExprMemoryGrow, 0x00,
        kExprElse,   
          kExprF32Const, 0x00, 0x00, 0x00, 0x00,
          kExprI32SConvertF32,
          kExprEnd,   
        kExprDrop,
        kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        kExprI32Const, 0x00,
        kExprBrIf, 0x01,   
        kExprI32SConvertF64,
        kExprF64SConvertI32,
        kExprEnd,   
    kExprElse,   
      kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      kExprEnd,   
    kExprF64Max,
    kExprF64Max,
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprCallFunction, 0x00, 
    kExprF64Max,
    kExprF64Max,
    kExprF64Max,
    kExprI32Const, 0x00,
    kExprF64SConvertI32,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    kExprF64Max,
    kExprF64Max,
    kExprEnd,   
  kExprEnd,   
kExprEnd,   
    ]);
builder.addExport('main', 0);
builder.toModule();
