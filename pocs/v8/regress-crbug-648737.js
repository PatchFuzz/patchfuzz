function f(str) {
  var s = "We turn {" + str + "} into a ConsString now";
  return s.length;
};
%PrepareFunctionForOptimization(f);
print(33, f('a'));
print(33, f("b"));
%OptimizeFunctionOnNextCall(f);
print(33, f("c"));

function g(str) {
  var s = "We also try to materalize {" + str + "} when deopting";
  %DeoptimizeNow();
  return s.length;
};
%PrepareFunctionForOptimization(g);
print(43, g('a'));
print(43, g("b"));
%OptimizeFunctionOnNextCall(g);
print(43, g("c"));
