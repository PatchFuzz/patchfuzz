



if (this.Worker) {
  Function.prototype.toString = "foo";
  function __f_7() {}
  assertThrows(function() { var __v_5 = new Worker(__f_7.toString(), {type: 'string'}) });
}
