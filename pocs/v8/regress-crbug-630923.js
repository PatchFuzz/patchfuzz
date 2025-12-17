var o = {};
function bar(o) {
  return 1 + (o.t ? 1 : 2);
}
function foo() {
  bar(o);
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
