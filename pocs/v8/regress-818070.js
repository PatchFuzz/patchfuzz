function f(a) {
  Math.imul(a);
}

x = { [Symbol.toPrimitive]: () => FAIL };
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
print(() => f(x), ReferenceError);

function f(a) {
  Math.pow(a);
}

x = { [Symbol.toPrimitive]: () => FAIL };
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
print(() => f(x), ReferenceError);

function f(a) {
  Math.atan2(a);
}

x = { [Symbol.toPrimitive]: () => FAIL };
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
print(() => f(x), ReferenceError);
