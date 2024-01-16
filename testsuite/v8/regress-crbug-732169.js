





(function TestGeneratorMaterialization() {
  function* f([x]) { yield x }
  
  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  var gen = f([23]);
  assertEquals("[object Generator]", gen.toString());
  assertEquals({ done:false, value:23 }, gen.next());
  assertEquals({ done:true, value:undefined }, gen.next());
})();

(function TestGeneratorMaterializationWithProperties() {
  function* f(x = (%_DeoptimizeNow(), 23)) { yield x }
  function g() {
    var gen = f();
    gen.p = 42;
    return gen;
  }
  function h() { f() }
  %PrepareFunctionForOptimization(h);
  
  for (var i = 0; i < 100; ++i) { g(); h(); }
  %OptimizeFunctionOnNextCall(h);
  h();  
})();
