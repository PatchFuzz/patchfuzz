class A {};

class B extends A {};

B.__proto__ = null;

%PrepareFunctionForOptimization(B);
try { new B(); } catch {}
%OptimizeFunctionOnNextCall(B);
try { new B(); } catch {}
