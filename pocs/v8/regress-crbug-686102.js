var a = [];
Object.freeze(a);
function foo() {
  return a.length;
};
%PrepareFunctionForOptimization(foo);
print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
