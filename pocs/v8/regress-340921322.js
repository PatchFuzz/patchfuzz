try {
  const obj = { 'i': 1096432812 };
  const arr = new Int8Array(obj.i+1);

  function foo() {
      arr[obj.i];
  }

  %PrepareFunctionForOptimization(foo);
  foo();
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
} catch (e) {
  print(e instanceof RangeError);
  print('Array buffer allocation failed', e.message);
}
