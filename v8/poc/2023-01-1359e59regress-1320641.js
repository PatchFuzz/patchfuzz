





function foo(){
  const xs = new Uint16Array(3775336418);
  return xs[-981886074];
}
%PrepareFunctionForOptimization(foo);
foo();

print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());
