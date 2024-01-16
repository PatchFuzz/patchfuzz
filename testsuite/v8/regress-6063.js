





var U16 = new Uint16Array(2);
U16[0] = 0xffff;

function foo(a, i) {
  return U16[0] === 0xffff;
};
%PrepareFunctionForOptimization(foo);
assertTrue(foo());
assertTrue(foo());
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo());
