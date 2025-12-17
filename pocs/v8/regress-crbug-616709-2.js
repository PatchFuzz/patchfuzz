for (var i = 0; i < 2000; i++) {
  Array.prototype['X' + i] = true;
}

function boom(a1) {
  return a1[0];
};
%PrepareFunctionForOptimization(boom);
var a = new Array(1);
a[0] = 0.1;
boom(a);
boom(a);
%OptimizeFunctionOnNextCall(boom);
boom(a);
