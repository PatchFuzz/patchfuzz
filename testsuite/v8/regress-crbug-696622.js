





class C {}
class D extends C { constructor() { super(...unresolved, 75) } }
D.__proto__ = null;

%PrepareFunctionForOptimization(D);


assertThrows(() => new D(), ReferenceError);
assertThrows(() => new D(), ReferenceError);
%OptimizeFunctionOnNextCall(D);
assertThrows(() => new D(), ReferenceError);
