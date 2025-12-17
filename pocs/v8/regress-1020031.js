function* f() {
  try {
    g();
  } catch {}
}

function g() {
  try {
    for (var i of f());
  } catch {
    gc();
  }
}

%PrepareFunctionForOptimization(g);
g();
g();
g();


%OptimizeFunctionOnNextCall(g);
g();
