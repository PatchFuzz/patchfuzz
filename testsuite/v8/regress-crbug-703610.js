





function fun() {};
fun.prototype = 42;
new fun();
function f() {
  return fun.prototype;
};
%PrepareFunctionForOptimization(f);
assertEquals(42, f());
assertEquals(42, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(42, f());
