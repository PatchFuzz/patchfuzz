if (this.Worker) {
  
  print(function() {
    Worker.prototype.terminate();
  });

  print(function() {
    Worker.prototype.getMessage();
  });

  print(function() {
    Worker.prototype.postMessage({});
  });

  
  var worker = new Worker('', {type: 'string'});
  worker.getMessage();
  worker.postMessage({});
  worker.terminate();
}
