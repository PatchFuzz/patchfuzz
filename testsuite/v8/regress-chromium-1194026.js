





function workerCode1() {
  onmessage = function(e) {
    const a = new Int32Array(e.sab);
    while(true) {
      
      
      const ret = Atomics.compareExchange(a, 0, 1, 2);
      if (ret === 1) {
        Atomics.notify(a, 0);
      }
      
      if (Atomics.load(a, 1) == 1) {
        return;
      }
    }
  }
}

function workerCode2() {
  const MAX_ROUNDS = 40;
  onmessage = function(e) {
    const a = new Int32Array(e.sab);
    let round = 0;
    function nextRound() {
      while (true) {
        if (round == MAX_ROUNDS) {
          
          Atomics.store(a, 1, 1);
          postMessage('done');
          return;
        }

        
        
        Atomics.store(a, 0, 1);

        const res = Atomics.waitAsync(a, 0, 1);
        if (res.async) {
          res.value.then(() => { ++round; nextRound();},
                         ()=> {});
          return;
        }
        
        
      }
    }

    nextRound();
  }
}

let sab = new SharedArrayBuffer(8);

let w1 = new Worker(workerCode1, {type: 'function'});
w1.postMessage({sab: sab});

let w2 = new Worker(workerCode2, {type: 'function'});
w2.postMessage({sab: sab});


w2.getMessage();
w1.terminate();
w2.terminate();
