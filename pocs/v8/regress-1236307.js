function __f_2(__v_6) {
  try {
    if (__v_6 > 0) return __f_2(...[__v_6 - 1]);
  } catch (e) {}
}
__f_2(100000);
__f_2(100000);
