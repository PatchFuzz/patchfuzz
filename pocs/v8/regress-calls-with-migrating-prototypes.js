function f() {
  return 1;
}
function C1(f) {
  this.f = f;
}
var o1 = new C1(f);
var o2 = {__proto__: new C1(f)};
function foo(o) {
  return o.f();
};
%PrepareFunctionForOptimization(foo);
foo(o1);
foo(o1);
foo(o2);
foo(o1);
var o3 = new C1(function() {
  return 2;
});
%OptimizeFunctionOnNextCall(foo);
print(1, foo(o2));
o2.__proto__.f = function() {
  return 3;
};
print(3, foo(o2));
