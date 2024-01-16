





class C0 {}
const proxy = new Proxy(C0, {});
class C1 extends proxy {}

%PrepareFunctionForOptimization(C1);
new C1();
%OptimizeFunctionOnNextCall(C1);
new C1();
