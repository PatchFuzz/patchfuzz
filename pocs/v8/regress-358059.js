function f(a, b) {
  return b + a.x++;
};
%PrepareFunctionForOptimization(f);
var o = {};
o.__defineGetter__('x', function() {
  return 1;
});
print(4, f(o, 3));
print(4, f(o, 3));
%OptimizeFunctionOnNextCall(f);
print(4, f(o, 3));
