function fun() {};
fun.prototype = 42;
new fun();
function f() {
  return fun.prototype;
};
%PrepareFunctionForOptimization(f);
print(42, f());
print(42, f());
%OptimizeFunctionOnNextCall(f);
print(42, f());
