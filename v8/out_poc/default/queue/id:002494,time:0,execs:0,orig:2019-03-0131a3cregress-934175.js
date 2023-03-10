





(function ShortcutEmptyStringAddRight() {
  let ar = new Float32Array(1);
  function opt(i){
    return ar[i] + (NaN ? 0 : '');
  }
  %PrepareFunctionForOptimization(opt);
  ar[0] = 42;
  opt(1);
  %OptimizeFunctionOnNextCall(opt);
  print("42", opt(0));
})();

(function ShortcutiEmptyStringAddLeft() {
  let ar = new Float32Array(1);
  function opt(i){
    return (NaN ? 0 : '') + ar[i];
  }
  %PrepareFunctionForOptimization(opt);
  ar[0] = 42;
  opt(1);
  %OptimizeFunctionOnNextCall(opt);
  print("42", opt(0));
})();
