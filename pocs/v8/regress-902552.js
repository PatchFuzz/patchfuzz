function f() {
  var C = class {};
  for (var i = 0; i < 4; ++i) {
    if (i == 2) %OptimizeOsr();
    C.prototype.foo = 42;
  }
}
%PrepareFunctionForOptimization(f);
f();
