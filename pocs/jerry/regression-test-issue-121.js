try {
  function f_1() {
    v_1 + v_1;
  }

  f_1(new f_1);

  assert (false);
} catch (e) {
  assert (e instanceof ReferenceError);
}
