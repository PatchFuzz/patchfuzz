x = Object.prototype;
x.foo = 3;
x.bar = 4;
delete x.foo;
x.foo = 5;

function f() {
  return foo;
};
%PrepareFunctionForOptimization(f);
for (i = 0; i < 5; ++i) {
  print(5, f());
}
%OptimizeFunctionOnNextCall(f);
print(5, f());


x.gee = function() {
  return 42;
};
function g() {
  return gee();
};
%PrepareFunctionForOptimization(g);
for (i = 0; i < 5; ++i) {
  print(42, g());
}
%OptimizeFunctionOnNextCall(g);
print(42, g());
