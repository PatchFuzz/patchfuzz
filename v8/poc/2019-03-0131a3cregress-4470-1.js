





function Foo() {}
Foo.prototype.x = 0;
function foo(f) {
  f.x = 1;
}
%PrepareFunctionForOptimization(foo);
foo(new Foo);
foo(new Foo);
%OptimizeFunctionOnNextCall(foo);
foo(new Foo);
print(Foo.prototype.x, 0);
