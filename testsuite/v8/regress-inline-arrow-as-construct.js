








var g = () => {};

function f() {
  return new g();
};
%PrepareFunctionForOptimization(f);
assertThrows(f);
assertThrows(f);
%OptimizeFunctionOnNextCall(f);
assertThrows(f);
