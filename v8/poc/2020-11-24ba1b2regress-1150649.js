





function foo(a) {
  var y = 0x7fffffff;  

  
  if (a == NaN) y = NaN;

  
  
  if (a) y = -1;

  const z = (y + 1)|0;
  return z < 0;
}

%PrepareFunctionForOptimization(foo);
print(foo(true));
%OptimizeFunctionOnNextCall(foo);
print(foo(false));
