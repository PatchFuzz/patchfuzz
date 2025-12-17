function foo(){
  const xs = new Uint16Array(3775336418);
  return xs[-981886074];
}

var skip = false;
try {
  new Uint16Array(3775336418);
} catch (e) {
  if (/Array buffer allocation failed/.test(e.message)) {
    skip = true;  
  }
}

if (!skip) {
  %PrepareFunctionForOptimization(foo);
  foo();

  print(undefined, foo());
  %OptimizeFunctionOnNextCall(foo);
  print(undefined, foo());
}
