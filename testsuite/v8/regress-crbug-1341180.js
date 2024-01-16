



let bytes = Uint8Array.from([
  0x00, 0x61, 0x73, 0x6d,  
  0x01, 0x00, 0x00, 0x00,  

  0x01, 0x04,              
  0x01,                    
  0x60, 0x00, 0x00,        

  0x03, 0x02,              
  0x01,                    
  0x00,                    

  0x0a, 0x02,              
  0x01,                    
                           
  0x00,                    
                           
                           

  0x00, 0x10,              
  0x04,                    
  0x6e, 0x61, 0x6d, 0x65,  
  0x01,                    
  0x09,                    
  0x02,                    
  0xff, 0xff, 0xff, 0xff, 0x0f, 0x00,  
  0x00, 0x00,              
]);

assertThrows(
    () => new WebAssembly.Instance(new WebAssembly.Module(bytes)),
    WebAssembly.CompileError);



let duplicate_funcname_subsection = Uint8Array.from([
  0x00, 0x61, 0x73, 0x6d,  
  0x01, 0x00, 0x00, 0x00,  

  0x01, 0x04,              
  0x01,                    
  0x60, 0x00, 0x00,        

  0x03, 0x02,              
  0x01,                    
  0x00,                    

  0x0a, 0x02,              
  0x01,                    
                           
  0x00,                    
                           
                           

  0x00, 0x0f,              
  0x04,                    
  0x6e, 0x61, 0x6d, 0x65,  
  0x01,                    
  0x03,                    
  0x01,                    
  0x00, 0x00,              
  0x01,                    
  0x03,                    
  0x01,                    
  0x01, 0x00,              
]);

assertThrows(
    () => new WebAssembly.Instance(
        new WebAssembly.Module(duplicate_funcname_subsection)),
    WebAssembly.CompileError);
