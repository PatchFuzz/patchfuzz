function foo(x) {
  return Object.is((x ? -0 : NaN) - 0, -0);
}

let ignition = foo(true);
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
let turbofan = foo(true);
print(ignition);
print(turbofan);
