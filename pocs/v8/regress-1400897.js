function bar() {
  const x = 0;
  return BigInt(x * -1);
}

%PrepareFunctionForOptimization(bar);
print(0n, bar());
%OptimizeFunctionOnNextCall(bar);
print(0n, bar());

function foo() {
  let result = 0n;
  let obj = {i: 0};
  for (; obj.i < 1; ++obj.i) {
    result += BigInt(obj.i * -2);
  }
  return result;
}

%PrepareFunctionForOptimization(foo);
print(0n, foo());
%OptimizeFunctionOnNextCall(foo);
print(0n, foo());
