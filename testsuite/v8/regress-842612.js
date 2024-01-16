





var arr = [undefined];

function f() {
  assertEquals(0, arr.indexOf(undefined, -1));
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
