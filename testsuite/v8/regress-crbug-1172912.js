





let raw = new Uint8Array([
  0x00, 0x61, 0x73, 0x6d,  
  0x01, 0x00, 0x00, 0x00,  

  0x01,  
  0x05,  
  0x01,  
  0x60,  
  0x00,  
  0x01,  
  0x7f,  

  0x03,  
  0x02,  
  0x01,  
  0x00,  

  0x07,  
  0x08,  
  0x01,  
  0x04,  
  0x6d, 0x61, 0x69, 0x6e,  
  0x00,  
  0x00,  

  0x0a,  
  0x0d,  
  0x01,  
  0x0b,  
  0x00,  
  0xd2, 0x00,  
  0xd1,  
  0x04, 0x40,  
  0x05,  
  0x0b,  
  0x41, 0x2a,  
  0x0b,  
]);
let buff = raw.buffer;
let mod = new WebAssembly.Module(buff);
let inst = new WebAssembly.Instance(mod);
let result = inst.exports.main();
assertEquals(42, result);
