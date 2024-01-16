





function f() {}

Function.prototype.__proto__ = new Proxy(f, {});

class C0 {}
class C1 extends C0 {}

%PrepareFunctionForOptimization(C1);
new C1();
%OptimizeFunctionOnNextCall(C1);
new C1();
