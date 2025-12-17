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
  print(g(), TypeError);
  return args.length;
};
%PrepareFunctionForOptimization(f);
print(1, f(0));
print(1, f(0));
%OptimizeFunctionOnNextCall(f);
print(1, f(0));
