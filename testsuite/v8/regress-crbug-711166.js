





'use strict';
function g() {
  var x = 1;
  try {
    undefined.x;
  } catch (e) {
    x = e;
  }
  (function() {
    x;
  });
  return x;
}
function f(a) {
  var args = arguments;
  assertInstanceof(g(), TypeError);
  return args.length;
};
%PrepareFunctionForOptimization(f);
assertEquals(1, f(0));
assertEquals(1, f(0));
%OptimizeFunctionOnNextCall(f);
assertEquals(1, f(0));
