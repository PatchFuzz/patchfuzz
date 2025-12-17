function f() {
  C = class {};
  for (var i = 0; i < 5; ++i) {
    gc();
    if (i == 2) %OptimizeOsr();
    C.prototype.foo = i + 9000000000000000;
  }
}
%PrepareFunctionForOptimization(f);
f();
