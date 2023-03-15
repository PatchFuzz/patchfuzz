





var array = [[]];
function foo() {
  const x = array[0];
  const y = [][0];
  return x == y;
}
%PrepareFunctionForOptimization(foo);
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
