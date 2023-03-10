





var a = new (function() { this[0] = 1 });
function f() {
  for (var i = 0; i < 4; ++i) {
    var x = a[0];
    (function() { return x });
    if (i == 1) %OptimizeOsr();
    gc();
  }
}
%PrepareFunctionForOptimization(f);
f();
