function O() {}
O.prototype.f = f;
O.prototype.g = g;

function f() {
  return g.arguments;
}

function g(x) {
  return this.f(2 - x, "any");
}

var o = new O();
function foo(x) {
  return o.g(x, "z");
}

for (var i = 0; i < 35; i++) foo();

var result = (
  %PrepareFunctionForOptimization(foo),foo(), foo(),
  %OptimizeFunctionOnNextCall(foo), foo()
);
print(result[1], "z");
