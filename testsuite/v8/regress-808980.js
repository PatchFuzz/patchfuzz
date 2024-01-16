







d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');
let kTableSize = 3;

var builder = new WasmModuleBuilder();
var sig_index1 = builder.addType(kSig_i_v);
builder.addFunction('main', kSig_i_ii).addBody([
    kExprLocalGet,
    0,
    kExprCallIndirect,
    sig_index1,
    kTableZero
]).exportAs('main');
builder.setTableBounds(kTableSize, kTableSize);
var m1_bytes = builder.toBuffer();
var m1 = new WebAssembly.Module(m1_bytes);

var serialized_m1 = %SerializeWasmModule(m1);
var m1_clone = %DeserializeWasmModule(serialized_m1, m1_bytes);
var i1 = new WebAssembly.Instance(m1_clone);

i1.exports.main(123123);
