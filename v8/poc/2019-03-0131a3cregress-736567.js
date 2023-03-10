





function f(b, x) {
  var o = b ? { a : 1 } : undefined;
  return o.a + !(x & 1);
}

f(1);

function g() {
  f(0, "s");
}

%PrepareFunctionForOptimization(g);
print(g);
%OptimizeFunctionOnNextCall(g);
print(g);
