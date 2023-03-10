






(function() {
  const arr = new Uint32Array([2**31]);
  function foo() {
    return (arr[0] ^ 0) + 1;
  }
  %PrepareFunctionForOptimization(foo);
  print(-(2**31) + 1, foo());
  %OptimizeFunctionOnNextCall(foo);
  print(-(2**31) + 1, foo());
})();





(function() {
  const arr = new Uint16Array([2**15]);
  function foo() {
    return (arr[0] ^ 0) + 1;
  }
  %PrepareFunctionForOptimization(foo);
  print(2**15 + 1, foo());
  %OptimizeFunctionOnNextCall(foo);
  print(2**15 + 1, foo());
})();


(function() {
  const arr = new Uint8Array([2**7]);
  function foo() {
    return (arr[0] ^ 0) + 1;
  }
  %PrepareFunctionForOptimization(foo);
  print(2**7 + 1, foo());
  %OptimizeFunctionOnNextCall(foo);
  print(2**7 + 1, foo());
})();


(function() {
  const arr = new Int32Array([-(2**31)]);
  function foo() {
    return (arr[0] >>> 0) + 1;
  }
  %PrepareFunctionForOptimization(foo);
  print(2**31 + 1, foo());
  %OptimizeFunctionOnNextCall(foo);
  print(2**31 + 1, foo());
})();
