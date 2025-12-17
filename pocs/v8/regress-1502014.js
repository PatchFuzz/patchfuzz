function workerCode() {
  onmessage = function() {
    this.performance.measureMemory();
    postMessage("done");
  };
  Object.defineProperty(this.d8.__proto__, 'then', {'get': function() {}});
}
const worker = new Worker(workerCode, {
  'type': 'function',
});
worker.postMessage({});
worker.getMessage();
