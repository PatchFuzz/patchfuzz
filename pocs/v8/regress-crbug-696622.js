class C {}
class D extends C { constructor() { super(...unresolved, 75) } }
D.__proto__ = null;

%PrepareFunctionForOptimization(D);


print(() => new D(), ReferenceError);
print(() => new D(), ReferenceError);
%OptimizeFunctionOnNextCall(D);
print(() => new D(), ReferenceError);
