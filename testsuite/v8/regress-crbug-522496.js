



if (this.Worker) {
  var worker = new Worker("onmessage = function(){}", {type: 'string'});
  var buf = new ArrayBuffer();
  worker.postMessage(buf, [buf]);
}
