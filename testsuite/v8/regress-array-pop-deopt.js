




























var o = [6, 7, 8, 9];

function f(b) {
  var v = o.pop() + b;
  return v;
};
%PrepareFunctionForOptimization(f);
assertEquals(10, f(1));
assertEquals(9, f(1));
assertEquals(8, f(1));
%OptimizeFunctionOnNextCall(f);
assertEquals("61", f("1"));
