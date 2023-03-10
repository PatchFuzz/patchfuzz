





a = new Int8Array(1);

function f(i) {
  return i in a;
};
%PrepareFunctionForOptimization(f);
print(f(0));
%OptimizeFunctionOnNextCall(f);
print(f(-1));
