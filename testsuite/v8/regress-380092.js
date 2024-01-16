





function many_hoist(o, index) {
  return o[index + 33554427];
};
%PrepareFunctionForOptimization(many_hoist);
var obj = {};
many_hoist(obj, 0);
%OptimizeFunctionOnNextCall(many_hoist);
many_hoist(obj, 5);

function constant_too_large(o, index) {
  return o[index + 1033554433];
};
%PrepareFunctionForOptimization(constant_too_large);
constant_too_large(obj, 0);
%OptimizeFunctionOnNextCall(constant_too_large);
constant_too_large(obj, 5);
