function foo(a) {
  var x = 1.7976931348623157e+308;
  __v_11 = x + a;
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeMaglevOnNextCall(foo);
foo();
