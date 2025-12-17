const worker = new Worker(function() {
  onmessage = function() {
    performance.measureMemory();
    postMessage("done");
  };
  performance.measureMemory();
  Object.defineProperty(this.d8.__proto__, 'then', {get: onmessage});
}, {type: 'function'});
worker.postMessage(0);
worker.getMessage();
