







const builder = new WasmModuleBuilder();
builder.addMemory(1, 10);
let loadFct = builder.addFunction('load', kSig_i_i).addBody([
  
  
  kExprLocalGet, 0,       
  kExprI32LoadMem, 0, 0,  
]).exportFunc();
const instance = builder.instantiate();
const load = instance.exports.load;
for (let i = 0; i < 20; i++) load(1);
%WasmTierUpFunction(load);
print(%IsLiftoffFunction(load));
load(1);
