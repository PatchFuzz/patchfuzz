



assertThrows(() => new WebAssembly.Module(
    new Uint8Array([
      0x00, 0x61, 0x73, 0x6d,     
      0x01, 0x00, 0x00, 0x00,     
      0x04,                       
      0x04,                       
      
      0x01,                       
      0x70,                       
      0x03,                       
      0x00])),
    WebAssembly.CompileError);
