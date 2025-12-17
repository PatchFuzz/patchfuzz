function dummy() {}

(function InlinedFunctionTestContext() {
  var f = function() {};

  function g() {
    var s = 'hey';
    dummy();  
    if (f()) return s;
  };
  %PrepareFunctionForOptimization(g);
  g();
  g();
  g();
  %OptimizeFunctionOnNextCall(g);
  f = function() {
    return true;
  };
  print("hey", g());
})();

(function InlinedConstructorReturnTestContext() {
  function c() {
    return 1;
  }

  var f = function() {
    return !new c();
  };

  function g() {
    var s = 'hey';
    dummy();  
    if (f()) return s;
  };
  %PrepareFunctionForOptimization(g);
  g();
  g();
  g();
  %OptimizeFunctionOnNextCall(g);
  f = function() {
    return true;
  };
  print("hey", g());
})();

(function InlinedConstructorNoReturnTestContext() {
  function c() {}

  var f = function() {
    return !new c();
  };

  function g() {
    var s = 'hey';
    dummy();  
    if (f()) return s;
  };
  %PrepareFunctionForOptimization(g);
  g();
  g();
  g();
  %OptimizeFunctionOnNextCall(g);
  f = function() {
    return true;
  };
  print("hey", g());
})();
