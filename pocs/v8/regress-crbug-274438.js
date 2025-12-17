function f(a, b) {
  var x = {a: a};
  switch (b) { case 'string': }
  var y = {b: b};
  return y;
};
%PrepareFunctionForOptimization(f);
f("a", "b");
f("a", "b");
%OptimizeFunctionOnNextCall(f);
f("a", "b");
%SetAllocationTimeout(100, 0);
var killer = f("bang", "bo" + "om");
print("boom", killer.b);
