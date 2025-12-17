(function test() {
  let bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d,  
    0x01, 0x00, 0x00, 0x00,  

    0x01,                    
    0x09,                    
    0x01, 0x60,              
    0x00,                    
    0x05,                    
    0x6f, 0x7e, 0x7d, 0x7e,  
    0x70,                    

    0x03,                    
    0x02,                    
    0x01, 0x00,              

    0x0a,                    
    0x17,                    
    0x01,                    
                             
    0x15,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0x00,                    
    0xfb, 0x19, 0b11, 0x00, 0x00, 0x00,  
    0x14, 0x10,              
    0xfb, 0x00,              
    0x68,                    
    0x2b, 0x26,              
  ]);
  print(WebAssembly.compileStreaming(Promise.resolve(bytes)).then(
    assertUnreachable,
    error => print(error, WebAssembly.CompileError)));
})();
