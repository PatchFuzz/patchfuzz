function foo(a, b) {
  var val;
  print(undefined, val);
  try {
    Object.defineProperty(  {
      get: function () {
        val = this;
      }
    });
  } catch (e) {}

  (function () {
    1[1] = b;
    typeof a;
  })();
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
