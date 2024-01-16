





var o = {}
var p = {foo: 1.5}

function g(x) { return x.foo === +x.foo; }

%PrepareFunctionForOptimization(g);
assertEquals(false, g(o));
assertEquals(false, g(o));
%OptimizeFunctionOnNextCall(g);
assertEquals(false, g(o));  
assertEquals(true, g(p));
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
assertEquals(false, g(o));  
