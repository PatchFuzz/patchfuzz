



if (this.Worker) {
  
  assertThrows(function() {
    Worker.prototype.terminate();
  });

  assertThrows(function() {
    Worker.prototype.getMessage();
  });

  assertThrows(function() {
    Worker.prototype.postMessage({});
  });

  
  var worker = new Worker('', {type: 'string'});
  worker.getMessage();
  worker.postMessage({});
  worker.terminate();
}
