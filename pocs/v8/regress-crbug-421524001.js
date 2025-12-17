function foo() {
  Object.defineProperty(this, "x", {
    configurable: true,
    enumerable: true,
    set: assertUnreachable,
  });
}

class C extends foo {
  x = 153;
}

%PrepareFunctionForOptimization(C);
var c = new C();
print(Object.getOwnPropertyDescriptor(c, "x").value, 153);
%OptimizeFunctionOnNextCall(C);
var c = new C();
print(Object.getOwnPropertyDescriptor(c, "x").value, 153);
