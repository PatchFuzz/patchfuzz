





function f(a, b) {
  return b + a.x++;
};
%PrepareFunctionForOptimization(f);
var o = {};
o.__defineGetter__('x', function() {
  return 1;
});
assertEquals(4, f(o, 3));
assertEquals(4, f(o, 3));
%OptimizeFunctionOnNextCall(f);
assertEquals(4, f(o, 3));
