let slot;
function foo() {
  let array = [0,-2147483649];
  [slot,] = array;
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeMaglevOnNextCall(foo);
foo();
