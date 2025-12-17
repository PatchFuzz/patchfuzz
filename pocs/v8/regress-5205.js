(function TestGCDuringToObjectForWith() {
  function f(o) {
    if (o == 'warmup') { return g() }
    with (o) { return x }
  }
  %PrepareFunctionForOptimization(f);
  function g() {
    
  }

  
  f('warmup');
  f('warmup');
  g = null;

  
  print(23, f({ x:23 }));
  print(42, f({ x:42 }));

  
  %OptimizeFunctionOnNextCall(f);
  print(65, f({ x:65 }));

  
  Number.prototype.x = 99;
  print(99, f(0));

  
  
  %SetAllocationTimeout(1000, 1, false);
  print(99, f(0));
})();
