function f() {
  %_DeoptimizeNow();
  throw 1;
}

function g() {
  try { f(); } catch(e) { }
  %PrepareFunctionForOptimization(g);
  for (var i = 0; i < 3; ++i) if (i === 1) %OptimizeOsr();
  %_DeoptimizeNow();
}
%PrepareFunctionForOptimization(g);

%OptimizeFunctionOnNextCall(g);
g();
