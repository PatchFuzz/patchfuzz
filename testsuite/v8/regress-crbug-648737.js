





function f(str) {
  var s = "We turn {" + str + "} into a ConsString now";
  return s.length;
};
%PrepareFunctionForOptimization(f);
assertEquals(33, f('a'));
assertEquals(33, f("b"));
%OptimizeFunctionOnNextCall(f);
assertEquals(33, f("c"));

function g(str) {
  var s = "We also try to materalize {" + str + "} when deopting";
  %DeoptimizeNow();
  return s.length;
};
%PrepareFunctionForOptimization(g);
assertEquals(43, g('a'));
assertEquals(43, g("b"));
%OptimizeFunctionOnNextCall(g);
assertEquals(43, g("c"));
