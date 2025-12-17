class C {
  foo() {
    return super.nodeType;
  }
}
var c0 = new C();

%PrepareFunctionForOptimization(C.prototype.foo);

print(c0.foo(), undefined);

C.prototype.__proto__ = new d8.dom.Div();
var c1 = new C();
print(()=>c1.foo());

%OptimizeMaglevOnNextCall(C.prototype.foo);

print(()=>c1.foo());
