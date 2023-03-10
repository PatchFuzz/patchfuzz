





function g() { return { val: new.target }; }
function f() { return (new g()).val; }

%PrepareFunctionForOptimization(f);
print(g, f());
print(g, f());
%OptimizeFunctionOnNextCall(f);
print(g, f());
