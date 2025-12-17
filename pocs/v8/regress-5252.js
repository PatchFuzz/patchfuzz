(function TestNonLoopyLoop() {
  function f() {
    do {
      %OptimizeOsr();
      return 23;
    } while(false)
  }
  %PrepareFunctionForOptimization(f);
  print(23, f());
  %PrepareFunctionForOptimization(f);
  print(23, f());
})();

(function TestNonLoopyGenerator() {
  function* g() {
    do {
      %OptimizeOsr();
      yield 23;
      yield 42;
    } while(false)
    return 999;
  }
  %PrepareFunctionForOptimization(g);
  var gen = g();
  print({ value:23, done:false }, gen.next());
  print({ value:42, done:false }, gen.next());
  print({ value:999, done:true }, gen.next());
})();
