





function f(b, s, x) {
  if (!b) {
    return (x ? b : s * undefined) ? 1 : 42;
  }
}

function g(b, x) {
  return f(b, 'abc', x);
}

%PrepareFunctionForOptimization(g);
f(false, 0, 0);
g(true, 0);
%OptimizeFunctionOnNextCall(g);
print(42, g(false, 0));
