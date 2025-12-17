class A {
  bar() { }
}
class B extends A {
  foo() {
    return super.bar();
  }
}
%PrepareFunctionForOptimization(B.prototype.foo);
new B().foo();
%OptimizeFunctionOnNextCall(B.prototype.foo);
new B().foo();
