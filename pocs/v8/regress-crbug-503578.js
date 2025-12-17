if (this.Worker) {
  function __f_0(byteLength) {
    var __v_1 = new ArrayBuffer(byteLength);
    var __v_5 = new Uint32Array(__v_1);
    return __v_5;
  }
  var __v_6 = new Worker('onmessage = function() {}', {type: 'string'});
  var __v_3 = __f_0(16);
  __v_6.postMessage(__v_3);
}
