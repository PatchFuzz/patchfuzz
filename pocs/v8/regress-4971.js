(function TestDeoptInNamedSuperGetter() {
  class C { m() { return 23 } }
  class D extends C { f() { return super.boom() } }

  var should_deoptimize_caller = false;
  Object.defineProperty(C.prototype, "boom", { get: function() {
    if (should_deoptimize_caller) %DeoptimizeFunction(D.prototype.f);
    return this.m
  }});

  %PrepareFunctionForOptimization(D.prototype.f);
  print(23, new D().f());
  print(23, new D().f());
  %OptimizeFunctionOnNextCall(D.prototype.f);
  print(23, new D().f());
  should_deoptimize_caller = true;
  print(23, new D().f());
})();

(function TestDeoptInKeyedSuperGetter() {
  class C { m() { return 23 } }
  class D extends C { f(name) { return super[name]() } }

  var should_deoptimize_caller = false;
  Object.defineProperty(C.prototype, "boom", { get: function() {
    if (should_deoptimize_caller) %DeoptimizeFunction(D.prototype.f);
    return this.m
  }});

  %PrepareFunctionForOptimization(D.prototype.f);
  print(23, new D().f("boom"));
  print(23, new D().f("boom"));
  %OptimizeFunctionOnNextCall(D.prototype.f);
  print(23, new D().f("boom"));
  should_deoptimize_caller = true;
  print(23, new D().f("boom"));
})();
