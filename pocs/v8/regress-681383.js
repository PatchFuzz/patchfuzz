function f(deopt) {
  let array = [42];
  let it = array[Symbol.iterator]();
  if (deopt) {
    %_DeoptimizeNow();
    return it.next().value;
  }
}

%PrepareFunctionForOptimization(f);
f(false);
f(false);
%OptimizeFunctionOnNextCall(f);
print(f(true), 42);
