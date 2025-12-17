try {
  Object.defineProperty(Number.prototype, "v", {
    get: constructor
  });
} catch (e) {}

function foo(obj) {
  return obj.v;
}

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(3);
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(3);
foo(4);
