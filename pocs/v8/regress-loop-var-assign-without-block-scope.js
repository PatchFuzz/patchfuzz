function f() {
  
  for (i = 0; i < 2; i++)
    var x = i, 
        y = y||(()=>x), 
        z0 = (%PrepareFunctionForOptimization(y)), 
        z = (%OptimizeFunctionOnNextCall(y), y()); 
  return y()
};
print(1, f())
