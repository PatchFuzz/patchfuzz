function main() {
  var obj = {};
  function foo() {
    return obj[0];
  };
  %PrepareFunctionForOptimization(foo);
  ;
  gc();
  obj.x = 10;
  %OptimizeFunctionOnNextCall(foo);
  foo();
}
main();
main();
