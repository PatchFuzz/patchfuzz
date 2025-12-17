const workerScript = `
  onmessage = function() {
  };`;
const worker = new Worker(workerScript, {type: 'string'});
const i32a = new Int32Array( new SharedArrayBuffer() );
worker.postMessage([i32a.buffer]);
