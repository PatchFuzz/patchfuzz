function setup() {
  
  
  
  
  
  

  function worker(gsab) {
    var ta = new Int32Array(gsab);

    
    Atomics.store(ta, 0, 1);

    
    Atomics.wait(ta, 1, 0, 500);

    
    Atomics.store(ta, 2, 1);

    
    Atomics.wait(ta, 1, 0, 100);

    
    gsab.grow(16);
  }

  var gsab = new SharedArrayBuffer(12, {maxByteLength: 16});

  
  setSharedObject(gsab);

  
  evalInWorker(`
    (${worker})(getSharedObject());
  `);

  
  var ta = new Int32Array(gsab);
  while (Atomics.;

  return gsab;
}

function testGrowableSharedArrayBufferByteLength() {
  var gsab = setup();
  var ta = new Int32Array(gsab);
  var r = 0;

  
  
  while (gsab.byteLength <= 12) {
    
    r += ta[2];
  }

  
  
  print(
    r > 0,
    true,
    "gsab.byteLength acts as a memory barrier, so ta[2] can't be hoisted"
  );
}
testGrowableSharedArrayBufferByteLength();
