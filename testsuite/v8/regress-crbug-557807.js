





function bar() {
  return {__proto__: this};
}
function foo(a) {
  a[0] = 0.3;
};
%PrepareFunctionForOptimization(foo);
foo(bar());
%OptimizeFunctionOnNextCall(foo);
foo(bar());
