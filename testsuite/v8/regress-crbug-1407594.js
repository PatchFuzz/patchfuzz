



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false);
builder.addDataSegment(0, [0x78, 0x56, 0x34, 0x12]);

let spiller = builder.addFunction('spiller', kSig_v_v).addBody([]);

builder.addFunction('main', kSig_l_v)
    .exportFunc()
    .addLocals(kWasmI64, 1)
    .addBody([
      
      kExprI32Const, 0,
      kExprI64LoadMem32U, 2, 0,
      kExprLocalSet, 0,
      kExprCallFunction, spiller.index,
      
      
      
      kExprLoop, kWasmVoid,
        kExprI32Const, 0,
        kExprI32LoadMem, 2, 0,
        kExprI32Eqz,
        
        
        kExprIf, kWasmVoid,
          kExprLocalGet, 0,
          kExprI64Const, 1,
          kExprI64And,
          kExprLocalSet, 0,
        kExprEnd,  
        kExprLocalGet, 0,
        kExprI64Const, 1,
        kExprI64And,
        kExprI64Eqz,
        
        
        kExprIf, kWasmVoid,
          kExprLocalGet, 0,
          kExprI64Const, 8,
          kExprI64Shl,
          kExprLocalSet, 0,
        kExprEnd,  
        kExprBlock, kWasmVoid,
          kExprLocalGet, 0,
          ...wasmI64Const(0xFFFFFF),
          kExprI64And,
          kExprI64Eqz,
          kExprI32Eqz,
          kExprCallFunction, spiller.index,
          kExprBrIf, 1,
        kExprEnd,  
        kExprCallFunction, spiller.index,
      kExprEnd,  
      kExprLocalGet, 0,
    ]);

let instance = builder.instantiate();
assertEquals("12345678000000", instance.exports.main().toString(16));
