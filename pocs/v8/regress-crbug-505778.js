if (this.Worker) {
  var __v_7 = new Worker('onmessage = function() {}', {type: 'string'});
  __v_7.postMessage("");
}
