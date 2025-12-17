function foo() {
  const a = [];
  a[0] = 1;
  return a[0];
};

function bar() {
  const a = new Array(10);
  a[0] = 1;
  return a[0];
};

Object.setPrototypeOf(Array.prototype, new Int8Array());
%PrepareFunctionForOptimization(foo);
print(undefined, foo());
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());
print(foo);

%PrepareFunctionForOptimization(bar);
print(undefined, bar());
print(undefined, bar());
%OptimizeFunctionOnNextCall(bar);
print(undefined, bar());
print(bar);
