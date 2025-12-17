var U16 = new Uint16Array(2);
U16[0] = 0xffff;

function foo(a, i) {
  return U16[0] === 0xffff;
};
%PrepareFunctionForOptimization(foo);
print(foo());
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
