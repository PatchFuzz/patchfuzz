var o = {}
var p = {foo: 1.5}

function g(x) { return x.foo === +x.foo; }

%PrepareFunctionForOptimization(g);
print(false, g(o));
print(false, g(o));
%OptimizeFunctionOnNextCall(g);
print(false, g(o));  
print(true, g(p));
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
print(false, g(o));  
