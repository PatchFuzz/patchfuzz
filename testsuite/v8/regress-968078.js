





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  function repeat(value, length) {
    var arr = new Array(length);
    for (let i = 0; i < length; i++) {
      arr[i] = value;
    }
    return arr;
  }
  function br_table(block_index, length, def_block) {
    const bytes = new Binary();
    bytes.emit_bytes([kExprBrTable]);
    
    bytes.emit_u32v(length);
    bytes.emit_bytes(repeat(block_index, length));
    bytes.emit_bytes([def_block]);
    return Array.from(bytes.trunc_buffer());
  }
  var builder = new WasmModuleBuilder();
  builder.addMemory(12, 12, false);
  builder.addFunction("foo", kSig_v_iii)
    .addBody([].concat([
      kExprBlock, kWasmVoid,
        kExprLocalGet, 0x2,
        kExprI32Const, 0x01,
        kExprI32And,
        
        kExprIf, kWasmVoid,
          kExprLocalGet, 0x0,
          kExprI32Const, 0x01,
          kExprI32And,
          kExprBrIf, 0x1,
          kExprLocalGet, 0x0,
          
          ], br_table(0x1, 9000, 0x00), [
        kExprEnd,
      kExprEnd,
    ])).exportFunc();
  builder.instantiate();
})();
