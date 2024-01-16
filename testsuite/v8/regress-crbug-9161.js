









const lock = new Int32Array(new SharedArrayBuffer(4));

const kIterations = 5000;
const kLength = 2000;

const kStageIndex = 0;
const kStageInit = 0;
const kStageRunning = 1;
const kStageDone = 2;

Atomics.store(lock, kStageIndex, kStageInit);

function WaitUntil(funcOfValue) {
  while (true) {
    const value = Atomics.load(lock, kStageIndex);
    if (funcOfValue(value)) break;
  }
}

const workerScript = `
  onmessage = function([sab, lock]) {
    const i32a = new Int32Array(sab);
    Atomics.store(lock, ${kStageIndex}, ${kStageRunning});

    for (let j = 1; j < ${kIterations}; ++j) {
      for (let i = 0; i < i32a.length; ++i) {
        i32a[i] = j;
      }
    }

    postMessage("done");
    Atomics.store(lock, ${kStageIndex}, ${kStageDone});
  };`;

const worker = new Worker(workerScript, {type: 'string'});

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * kLength)
);

worker.postMessage([i32a.buffer, lock]);
WaitUntil(value => value !== kStageInit);

for (let i = 0; i < kIterations; ++i) {
  i32a.sort();
}

WaitUntil(value => value === kStageDone);
assertEquals(worker.getMessage(), "done");
