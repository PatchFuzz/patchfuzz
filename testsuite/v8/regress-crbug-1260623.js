






const c = class C { };
function newC(arg1) {
  return Reflect.apply(c, arg1, arguments);
}
%PrepareFunctionForOptimization(newC);
assertThrows(newC, TypeError);
assertThrows(newC, TypeError);
%OptimizeFunctionOnNextCall(newC);
assertThrows(newC, TypeError);


function newD(...args) {
  class D {}
  D(...args);
}
%PrepareFunctionForOptimization(newD);
assertThrows(newD, TypeError);
assertThrows(newD, TypeError);
%OptimizeFunctionOnNextCall(newD);
assertThrows(newD, TypeError);
