





function get(a, i) {
  return a[i];
}

%PrepareFunctionForOptimization(get);
get([1,,3], 0);
get([1,,3], 2);
%OptimizeFunctionOnNextCall(get);
get([1,,3], 0);
assertOptimized(get);


Object.prototype.unrelated = 1;
assertOptimized(get);
