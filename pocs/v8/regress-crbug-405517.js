function f() {
  var e = [0];
  Object.preventExtensions(e);
  for (var i = 0; i < 4; i++) e.shift();
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
