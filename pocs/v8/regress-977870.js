function f() {
  v_0 = {};
  Object.defineProperty(v_0, '0', {});
  v_0.p_0 = 0;
  print(['0', 'p_0'],
                    Object.getOwnPropertyNames(v_0));
  print(['0', 'p_0'],
                    Object.getOwnPropertyNames(v_0));
}
f();
