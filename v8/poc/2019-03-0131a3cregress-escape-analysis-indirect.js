





function f(apply) {
  var value = 23;
  apply(function bogeyman() { value = 42 });
  return value;
}
%PrepareFunctionForOptimization(f);
function apply(fun) { fun() }
print(42, f(apply));
print(42, f(apply));
%NeverOptimizeFunction(apply);
%OptimizeFunctionOnNextCall(f);
print(42, f(apply));
