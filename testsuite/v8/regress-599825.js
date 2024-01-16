





function __f_97(stdlib, buffer) {
  "use asm";
  var __v_30 = new stdlib.Int32Array(buffer);
  function __f_74() {
    var __v_27 = 4;
    __v_30[__v_27 >> __v_2] = ((__v_30[-1073741825]|-10) + 2) | 0;
  }
}
var module = __f_97(this);
assertFalse(%IsAsmWasmCode(__f_97));
