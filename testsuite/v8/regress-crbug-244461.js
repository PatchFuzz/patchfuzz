




























function foo(arg) {
  var a = arg();
  return a;
};
%PrepareFunctionForOptimization(foo);

foo(Array);
foo(Array);
%OptimizeFunctionOnNextCall(foo);

foo(Array);
