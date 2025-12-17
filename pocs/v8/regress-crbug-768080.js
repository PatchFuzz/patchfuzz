(function TestReflectConstructBogusNewTarget1() {
  class C {}
  function g() {
    Reflect.construct(C, arguments, 23);
  }
  function f() {
    return new g();
  };
  %PrepareFunctionForOptimization(f);
  new C();  
  print(f, TypeError);
  print(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();

(function TestReflectConstructBogusNewTarget2() {
  class C {}
  
  
  
  function g() {
    Reflect.construct(C, arguments, unescape);
  }
  function f() {
    return new g();
  };
  %PrepareFunctionForOptimization(f);
  new C();  
  print(f, TypeError);
  print(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();

(function TestReflectConstructBogusTarget() {
  function g() {
    Reflect.construct(23, arguments);
  }
  function f() {
    return new g();
  };
  %PrepareFunctionForOptimization(f);
  print(f, TypeError);
  print(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();

(function TestReflectApplyBogusTarget() {
  function g() {
    Reflect.apply(23, this, arguments);
  }
  function f() {
    return g();
  };
  %PrepareFunctionForOptimization(f);
  print(f, TypeError);
  print(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();
