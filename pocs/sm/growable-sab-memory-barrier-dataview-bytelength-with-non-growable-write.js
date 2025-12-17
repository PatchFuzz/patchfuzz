function setup() {
  
  
  
  
  
  

  function worker(gsab, sab) {
    var ta = new Int32Array(gsab);
    var ta2 = new Int32Array(sab);

    
    Atomics.store(ta, 0, 1);

    
    Atomics.wait(ta, 1, 0, 500);

    
    Atomics.store(ta2, 2, 1);

    
    Atomics.wait(ta, 1, 0, 100);

    
    gsab.grow(16);
  }

  var gsab = new SharedArrayBuffer(12, {maxByteLength: 16});
  var sab = new SharedArrayBuffer(12);

  
  {
    let buffers = [gsab, sab];

    
    
    
    
    
    let sync = new Int32Array(new SharedArrayBuffer(3 * Int32Array.BYTES_PER_ELEMENT));
    sync[0] = buffers.length;

    setSharedObject(sync.buffer);

    evalInWorker(`
      let buffers = [];
      let sync = new Int32Array(getSharedObject());
      let n = sync[0];
      for (let i = 0; i < n; ++i) {
        
        Atomics.store(sync, 1, 1);

        
        while (Atomics.compareExchange(sync, 2, 1, 0) !== 1);

        buffers.push(getSharedObject());
      }
      (${worker})(...buffers);
    `);

    for (let buffer of buffers) {
      
      while (Atomics.compareExchange(sync, 1, 1, 0) !== 1);

      setSharedObject(buffer);

      
      Atomics.store(sync, 2, 1);
    }
  }

  
  var ta = new Int32Array(gsab);
  while (Atomics.;

  return {gsab, sab};
}

function testDataViewByteLength() {
  var {gsab, sab} = setup();
  var dv = new DataView(gsab);
  var ta2 = new Int32Array(sab);
  var r = 0;

  
  
  while (dv.byteLength <= 12) {
    
    r += ta2[2];
  }

  
  
  print(
    r > 0,
    true,
    "dv.byteLength acts as a memory barrier, so ta2[2] can't be hoisted"
  );
}
testDataViewByteLength();
