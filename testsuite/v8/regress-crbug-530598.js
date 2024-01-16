





var f1 = (function() {
  "use asm";
  function g() { throw 0; }
  function f() { return g(); }
  return f;
})();
%PrepareFunctionForOptimization(f1);
assertThrows("f1()");
%OptimizeFunctionOnNextCall(f1);
assertThrows("f1()");

var f2 = (function() {
  "use asm";
  function g() { for (;;); }
  function f(a) { return a || g(); }
  return f;
})();
%PrepareFunctionForOptimization(f2);
assertTrue(f2(true));
%OptimizeFunctionOnNextCall(f2);
assertTrue(f2(true));
