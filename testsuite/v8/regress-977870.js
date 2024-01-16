



function f() {
  v_0 = {};
  Object.defineProperty(v_0, '0', {});
  v_0.p_0 = 0;
  assertArrayEquals(['0', 'p_0'],
                    Object.getOwnPropertyNames(v_0));
  assertArrayEquals(['0', 'p_0'],
                    Object.getOwnPropertyNames(v_0));
}
f();
