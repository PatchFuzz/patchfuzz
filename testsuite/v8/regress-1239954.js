





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();

let array_index = builder.addArray(kWasmI64, true);
let sig_index = builder.addType(kSig_v_v);

let main = builder.addFunction("main", kSig_v_i);
let other = builder.addFunction("other", sig_index).addBody([]);

let table = builder.addTable(kWasmAnyFunc, 1, 1);
builder.addActiveElementSegment(
    0,                
    wasmI32Const(0),  
    [1]);             

main.addBody([
    kExprI64Const, 0x33,
    kExprLocalGet, 0,
    kGCPrefix, kExprArrayNew, array_index,
    kExprDrop,
    kExprI32Const, 0,
    kExprCallIndirect, sig_index, table.index,
]).exportFunc();

var instance = builder.instantiate();

assertThrows(
    () => instance.exports.main(1<<29), WebAssembly.RuntimeError,
    'requested new array is too large');
