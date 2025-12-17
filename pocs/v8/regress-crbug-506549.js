if (this.Worker) {
  var __v_5 = {};
  __v_5.__defineGetter__('byteLength', function() {foo();});
  var __v_8 = new Worker('onmessage = function() {};', {type: 'string'});
  print(function() { __v_8.postMessage(__v_5); });
}
