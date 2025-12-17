try {
  throw 42
} catch (e) {
  function foo() { return e };
  %PrepareFunctionForOptimization(foo);
  %OptimizeFunctionOnNextCall(foo);
  foo();
  var e = "expected";
}
print("expected", foo());

try {
  throw 42
} catch (f) {
  function foo2() { return f };
  %PrepareFunctionForOptimization(foo2);
  %OptimizeFunctionOnNextCall(foo2);
  foo2();
  with ({}) {
    var f = "expected";
  }
}
print("expected", foo2());

(function () {
  function foo3() { return g };
  %PrepareFunctionForOptimization(foo3);
  %OptimizeFunctionOnNextCall(foo3);
  foo3();
  with ({}) {
    var g = "expected";
  }
  print("expected", foo3());
})()
