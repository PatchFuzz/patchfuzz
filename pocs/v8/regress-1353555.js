const worker = new Worker(`function onmessage({data:buffer}) {
  const shared2 = new Int32Array(buffer);
  shared2.fill(1);
}`, {
  type: 'string'
});

const shared = new Int32Array(new SharedArrayBuffer(4));
worker.postMessage(shared.buffer);

while (Atomics.load(shared) == 0) {}
(new Int32Array(1)).set(shared);
