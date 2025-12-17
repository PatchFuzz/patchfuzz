var a = [0];
function bar(x) {
  return x;
}
function foo() {
  return a.reduce(bar);
};
%PrepareFunctionForOptimization(foo);
print(0, foo());
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
