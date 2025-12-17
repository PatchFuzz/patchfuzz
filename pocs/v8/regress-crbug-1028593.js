function foo() {
  try {
    return "number".charCodeAt(0n);
  } catch(e) {}
}
%PrepareFunctionForOptimization(foo);
for (let i = 0; i < 3; i++) {
  foo();
}
%OptimizeFunctionOnNextCall(foo);
foo();
