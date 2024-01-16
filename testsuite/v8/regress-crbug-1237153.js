





function onmessage([buf]) {
    const arr = new Int32Array(buf);
    for (let val = 1; val < 100; ++val) arr.fill(val);
}
const arr = new Int32Array(new SharedArrayBuffer(4));
const worker = new Worker(`onmessage = ${onmessage}`, { type: 'string' });
worker.postMessage([arr.buffer]);

while (Atomics.load(arr) == 0) { }

const slice = arr.slice(0, 1);
