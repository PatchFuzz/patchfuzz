





function __f_1() {
  'use asm';
  function __f_3() {
    var __v_11 = 1, __v_10 = 0, __v_12 = 0;
    __v_12 = (__v_10 | 12) % 4294967295 | -1073741824;
  }
  return { __f_3: __f_3 };
}
assertFalse(%IsAsmWasmCode(__f_1));
