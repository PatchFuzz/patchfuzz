





function f() {
  for (var i = 0; i < 10; i++) if (i == 5) %OptimizeOsr();
  function g() {}
  %PrepareFunctionForOptimization(g);
  %OptimizeFunctionOnNextCall(g);
  g();
}
%PrepareFunctionForOptimization(f);
f();
gc();  
gc();  
gc();  
gc();  
%PrepareFunctionForOptimization(f);
f();
