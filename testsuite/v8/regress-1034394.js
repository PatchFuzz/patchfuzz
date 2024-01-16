



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');


const NUM_CASES = 3073;

let body = [];

body.push(kExprBlock);
body.push(kWasmVoid);


body.push(kExprLocalGet, 0);
body.push(kExprBrTable, ...wasmSignedLeb(NUM_CASES));
for (let i = 0; i < NUM_CASES + 1; i++) {
  body.push(i % 2);
}


body.push(kExprEnd);


let builder = new WasmModuleBuilder();
builder.addFunction('main', kSig_v_i).addBody(body).exportFunc();
let instance = builder.instantiate();
instance.exports.main(0);
