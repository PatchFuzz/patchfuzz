function foo(obj) {
  [undefined].forEach((elem) => print(undefined, elem));
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
