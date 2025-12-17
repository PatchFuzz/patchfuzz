let gsab = new SharedArrayBuffer(3, {maxByteLength: 4});

setSharedObject(gsab);

function worker(gsab) {
  let ta = new Int8Array(gsab);

  
  while (Atomics.;

  
  gsab.grow(4);

  
  Atomics.store(ta, 1, 1);
}

evalInWorker(`(${worker})(getSharedObject());`);

let ta = new Int8Array(gsab);

let value = {
  valueOf() {
    
    Atomics.store(ta, 0, 1);

    
    while (Atomics.;

    
    return 0;
  }
};


ta[3] = value;
