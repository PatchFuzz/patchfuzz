





function C() { return this };
function foo() {
  return new C() instanceof function(){};
}
%PrepareFunctionForOptimization(C);
%PrepareFunctionForOptimization(foo);
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
