



const sync_arr = new Int32Array(new SharedArrayBuffer(4));
function waitForWorker() {
  while (Atomics.load(sync_arr) == 0) {}
}
function onmessage([sab, lock]) {
  const i32a = new Int32Array(sab);
  Atomics.store(lock, 0, 1);
  for (let j = 1; j < 1000; ++j) {
    for (let i = 0; i < i32a.length; ++i) {
      i32a[i] = j;
    }
  }
}
const worker = new Worker(`onmessage = ${onmessage}`, {type: 'string'});
const arr =
    new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 100));
worker.postMessage([arr.buffer, sync_arr]);

waitForWorker();
arr.sort();
