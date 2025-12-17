function foo() {
  var a = [0];
  Object.preventExtensions(a);
  return a.pop();
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
