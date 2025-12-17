var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,5,4,1,1,0,0,7,5,1,1,102,0,0,10,6,1,4,0,0,11,11,0,11,4,110,97,109,101,1,4,1,0,1,102]);
var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, {});
let threw = false;
try
{
    wasmInstance.exports.f();
}
catch(e)
{
    threw = true;
}
print(threw ? "Pass" : "Fail");
