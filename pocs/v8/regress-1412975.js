function foo() {
  let v1 = -2564233261n;
  const v2 = "function".charCodeAt(2);
  return v1 + v1;
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
