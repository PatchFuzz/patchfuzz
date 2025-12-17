function func() {
  function foo() {}
  return foo;
}

function bar(foo) {
  %DisassembleFunction(foo);
  foo();
  %PrepareFunctionForOptimization(foo);
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
}

bar(func());
bar(func());
bar(func());
