





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();




const kManyParams = 32;
const kSigWithManyRefParams = makeSig(
  new Array(kManyParams).fill(kWasmExternRef), []);
const kPrepareManyParamsCallBody = Array.from(
  {length: kManyParams * 2},
  (item, index) => index % 2 == 0 ? kExprLocalGet : 0);


builder.addFunction(undefined, kSigWithManyRefParams).addBody([
]);

builder.addFunction(undefined, kSigWithManyRefParams)
.addBody([
  ...kPrepareManyParamsCallBody,
  kExprCallFunction, 0,  
]);

builder.addFunction(undefined, kSigWithManyRefParams).addBody([
  ...kPrepareManyParamsCallBody,
  kExprCallFunction,  1,  
]).exportAs('manyRefs');

const instance = builder.instantiate();
instance.exports.manyRefs();
