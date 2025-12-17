const c = class C { };
function newC(arg1) {
  return Reflect.apply(c, arg1, arguments);
}
%PrepareFunctionForOptimization(newC);
print(newC, TypeError);
print(newC, TypeError);
%OptimizeFunctionOnNextCall(newC);
print(newC, TypeError);


function newD(...args) {
  class D {}
  D(...args);
}
%PrepareFunctionForOptimization(newD);
print(newD, TypeError);
print(newD, TypeError);
%OptimizeFunctionOnNextCall(newD);
print(newD, TypeError);
