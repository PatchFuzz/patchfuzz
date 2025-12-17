function f(array) {
  return array.length >>> 0;
};
%PrepareFunctionForOptimization(f);
var a = new Array();
a[4000000000] = "A";

print(4000000001, f(a));
print(4000000001, f(a));
%OptimizeFunctionOnNextCall(f);
print(4000000001, f(a));
