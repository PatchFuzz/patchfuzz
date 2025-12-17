function bar(x) { return x % 2; }
bar(0.1);


(function() {
  function foo(x) {
    
    return bar(x | -1) == 4294967295;
  }

  %PrepareFunctionForOptimization(foo);
  print(foo(1));
  print(foo(0));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(1));
  print(foo(0));
})();


(function() {
  function makeFoo(y) {
    return function foo(x) {
      return bar(x | -1) == y;
    }
  }
  makeFoo(0);  
  const foo = makeFoo(1);

  %PrepareFunctionForOptimization(foo);
  print(foo(1));
  print(foo(0));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(1));
  print(foo(0));
})();
