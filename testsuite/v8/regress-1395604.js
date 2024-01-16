





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addMemory();
var sig_one = builder.addType(makeSig(new Array(9).fill(kWasmI32), []));
var zero = builder.addFunction('zero', kSig_v_i);
var one = builder.addFunction('one', sig_one);
var two = builder.addFunction('two', kSig_v_i);

zero.addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0, kExprDrop]);

one.addBody([kExprLocalGet, 7, kExprCallFunction, zero.index]);

two.addBody([
     kExprI32Const,     101,  
     kExprI32Const,     102,  
     kExprI32Const,     103,  
     kExprI32Const,     104,  
     kExprI32Const,     105,  
     kExprI32Const,     106,  
     kExprI32Const,     107,  
     kExprI32Const,     108,  
     kExprI32Const,     109,  
     kExprCallFunction, one.index
   ])
    .exportFunc();
let instance = builder.instantiate();
assertTraps(kTrapMemOutOfBounds, instance.exports.two);
