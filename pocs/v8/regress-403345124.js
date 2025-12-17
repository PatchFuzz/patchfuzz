(function() {
  var fail;
  let count = 0;
  function bar () {
    if (count > 50) return undefined;
  }

  function soft() {
    try { fail(); } catch (e) {}
  }

  function foo(x) {
    if (x < 3) {
      bar();
      soft();
      if (x == 42) {
      }
    }
  }

  %PrepareFunctionForOptimization(soft);
  %PrepareFunctionForOptimization(foo);
  foo(0);
  foo(0);
  
  
  
  %PrepareFunctionForOptimization(bar);
  %OptimizeFunctionOnNextCall(foo);
  foo();
})();

(function() {
  function testclz(x) {
    for (var i = 0; i < 33; i++) {
      if (x & 0x80000000) return i;
      x <<= 1;
    }
    return 32;
  }

  function f() {
    print(testclz(0), 32);
  }

  %PrepareFunctionForOptimization(assertEquals);
  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeMaglevOnNextCall(f);
  f();
})();
