





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');






const sync_address = 12;
(function TestPostModule() {
  let builder = new WasmModuleBuilder();
  let sig_index = builder.addType(kSig_v_v);
  let import_id = builder.addImport('m', 'func', sig_index);
  builder.addFunction('wait', kSig_v_v)
      .addBody([
        
        
        kExprCallFunction, import_id,  
        kExprLoop, kWasmVoid,          
        kExprI32Const, sync_address,   
        kExprI32LoadMem, 0, 0,         
        kExprI32Eqz,
        kExprBrIf, 0,                  
        kExprEnd,
      ])
      .exportFunc();

  builder.addFunction('signal', kSig_v_v)
      .addBody([
        kExprI32Const, sync_address,  
        kExprI32Const, 1,             
        kExprI32StoreMem, 0, 0,       
        ])
      .exportFunc();
  builder.addImportedMemory("m", "imported_mem", 0, 1, "shared");

  let module = builder.toModule();
  let memory = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});

  let workerScript = `
    onmessage = function(msg) {
      try {
        let worker_instance = new WebAssembly.Instance(msg.module,
            {m: {imported_mem: msg.memory,
                 func: _ => 5}});
        postMessage("start running");
        worker_instance.exports.wait();
        postMessage("finished");
      } catch(e) {
        postMessage('ERROR: ' + e);
      }
    }
  `;

  let worker = new Worker(workerScript, {type: 'string'});
  worker.postMessage({module: module, memory: memory});

  let main_instance = new WebAssembly.Instance(
      module, {m: {imported_mem: memory, func: _ => 7}});

  let counter = 0;
  function CheckThreadNotInWasm() {
    
    
    assertFalse(%IsThreadInWasm());
    counter++;
    if (counter < 100) {
      setTimeout(CheckThreadNotInWasm, 0);
    } else {
      main_instance.exports.signal(sync_address);
      assertEquals('finished', worker.getMessage());
      worker.terminate();
    }
  }

  assertFalse(%IsThreadInWasm());
  assertEquals('start running', worker.getMessage());
  CheckThreadNotInWasm();
})();
