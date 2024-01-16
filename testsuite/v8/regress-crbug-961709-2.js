





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
assertEquals(undefined, foo());
assertEquals(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo());
assertOptimized(foo);

%PrepareFunctionForOptimization(bar);
assertEquals(undefined, bar());
assertEquals(undefined, bar());
%OptimizeFunctionOnNextCall(bar);
assertEquals(undefined, bar());
assertOptimized(bar);
