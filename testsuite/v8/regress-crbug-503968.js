



if (this.Worker) {
  function __f_0() { this.s = new Object(); }
  function __f_1() {
    this.l = [new __f_0, new __f_0];
  }
  __v_6 = new __f_1;
  var __v_9 = new Worker('', {type: 'string'});
  __v_9.postMessage(__v_6);
}
