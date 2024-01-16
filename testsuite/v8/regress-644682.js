





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
var builder = new WasmModuleBuilder();
builder.addFunction("regression_644682", kSig_i_v)
  .addBody([
            kExprBlock,   
            kExprI32Const, 0x3b,
            kExprI32LoadMem, 0x00, 0x00,
            kExprI32Const, 0x10,
            kExprBrIf, 0x01, 0x00,   
            kExprI32Const, 0x45,
            kExprI32Const, 0x3b,
            kExprI64LoadMem16S, 0x00, 0x3b,
            kExprBrIf, 0x01, 0x00   
            ])
            .exportFunc();
assertThrows(function() { builder.instantiate(); });
})();
