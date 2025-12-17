"use strict";

class B {
  foo() { return 23 }
}

class C extends B {
  bar() { return super[%DeoptimizeFunction(C.prototype.bar), "foo"]() }
}
%PrepareFunctionForOptimization(C.prototype.bar);

print(23, new C().bar());
print(23, new C().bar());
%OptimizeFunctionOnNextCall(C.prototype.bar);
print(23, new C().bar());
