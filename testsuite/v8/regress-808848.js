






d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');



const kNumLocals = 128;

function varuint32(val) {
  let bytes = [];
  for (let i = 0; i < 4; ++i) {
    bytes.push(0x80 | ((val >> (7 * i)) & 0x7f));
  }
  bytes.push((val >> (7 * 4)) & 0x7f);
  return bytes;
}






let body = [];

for (let i = 0; i < kNumLocals; ++i) {
  body.push(kExprCallFunction, 0, kExprLocalSet, ...varuint32(i));
}

for (let i = 0; i < kNumLocals; ++i) {
  body.push(kExprLocalGet, ...varuint32(i), kExprCallFunction, 1);
}

let builder = new WasmModuleBuilder();
builder.addImport('mod', 'get', kSig_i_v);
builder.addImport('mod', 'call', kSig_v_i);
builder.
  addFunction('main', kSig_v_v).
  addLocals(kWasmI32, kNumLocals).
  addBody(body).
  exportAs('main');
let m1_bytes = builder.toBuffer();
let m1 = new WebAssembly.Module(m1_bytes);


let serialized_m1 = %SerializeWasmModule(m1);

let worker_onmessage = function(msg) {
  let {serialized_m1, m1_bytes} = msg;

  let m1_clone = %DeserializeWasmModule(serialized_m1, m1_bytes);
  let imports = {mod: {get: () => 3, call: () => {}}};
  let i2 = new WebAssembly.Instance(m1_clone, imports);
  i2.exports.main();
  postMessage('done');
}
let workerScript = "onmessage = " + worker_onmessage.toString();

let worker = new Worker(workerScript, {type: 'string'});
worker.postMessage({serialized_m1, m1_bytes});


print(worker.getMessage());
