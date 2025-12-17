global = 'n';
function f(deopt) {
  let it = global[Symbol.iterator]();
  if (deopt) {
    return it.next().value;
  }
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
print('n', f(true));
