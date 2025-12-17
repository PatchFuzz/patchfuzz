function startWorker(worker) {
  evalInWorker(`
    (${worker})(getSharedObject());
  `);
}





let sab = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT)
let i32 = new Int32Array(sab);

setSharedObject(sab);


const N = 4;


const K = N * 1000;

for (let i = 0; i < N; ++i) {
  startWorker(function(sab) {
    
    const N = 4;

    
    const K = N * 1000;

    let i32 = new Int32Array(sab);

    
    Atomics.add(i32, 3, 1);

    
    Atomics.wait(i32, 2, 0);

    for (let i = 0; i < K / N; ++i) {
      
      while (true) {
        while (Atomics. {
          Atomics.pause();
        }
        if (Atomics.exchange(i32, 0, 1) === 0) {
          break;
        }
      }

      
      i32[1] += 1;

      
      Atomics.store(i32, 0, 0);
    }

    
    Atomics.sub(i32, 3, 1);
  });
}


while (Atomics. {
  Atomics.pause();
}


let woken = 0;
while ((woken += Atomics.notify(i32, 2, N)) !== N) {
}


while (Atomics. {
  Atomics.pause();
}

print(i32[1], K);
