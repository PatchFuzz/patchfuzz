let binary = new Binary;
binary.emit_bytes([
  kWasmH0,              
  kWasmH1,              
  kWasmH2,              
  kWasmH3,              
  kWasmV0,              
  kWasmV1,              
  kWasmV2,              
  kWasmV3,              
  kUnknownSectionCode,  
  0x5,                  
  0x6,                  
  'a',                  
  'b',                  
  'c',                  
  'd',                  
  kCodeSectionCode,     
  0x1,                  
  19,                   
]);

const buffer = binary.trunc_buffer();
print(
    WebAssembly.compile(buffer), WebAssembly.CompileError,
    'WebAssembly.compile(): expected 6 bytes, fell off end @+11');
