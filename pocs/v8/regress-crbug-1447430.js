var s = %CreatePrivateSymbol('x');

(function TestSmi() {
  function f(o, p) {
    o[p] = 153;
  }
  (1).__proto__[s] = 42;
  %PrepareFunctionForOptimization(f);
  print(f(42, s), undefined);
}());

(function TestString() {
  function f(o, p) {
    o[p] = 153;
  }
  ('xyz').__proto__[s] = 42;
  %PrepareFunctionForOptimization(f);
  print(f('abc', s), undefined);
}());

(function TestSymbol() {
  function f(o, p) {
    o[p] = 153;
  }
  Symbol('xyz').__proto__[s] = 42;
  %PrepareFunctionForOptimization(f);
  print(f(Symbol('abc'), s), undefined);
}());
