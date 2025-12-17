function foo(opt) {
  class C {}
  function bar() {
    let x = 0;
    for (let i = 0; i < 5; i++) {
      C[2] = x;
      C[2] = x;
      x++;
    }
  }
  %PrepareFunctionForOptimization(bar);
  bar();
  bar();
  if (opt) {
    %OptimizeMaglevOnNextCall(bar);
  }
  bar();
}

foo(false);
foo(true)
