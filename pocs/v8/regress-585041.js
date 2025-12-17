function f(arr, i) {
  arr[i] = 50;
}

function boom(dummy) {
  var arr = new Array(10);
  f(arr, 10);
  if (dummy) {
    f(arr, -2147483648);
  }
};
%PrepareFunctionForOptimization(boom);
boom(false);
%OptimizeFunctionOnNextCall(boom);
boom(false);
