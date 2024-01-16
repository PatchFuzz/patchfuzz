





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

  
  assertEquals(23, f({ x:23 }));
  assertEquals(42, f({ x:42 }));

  
  %OptimizeFunctionOnNextCall(f);
  assertEquals(65, f({ x:65 }));

  
  Number.prototype.x = 99;
  assertEquals(99, f(0));

  
  
  %SetAllocationTimeout(1000, 1, false);
  assertEquals(99, f(0));
})();
