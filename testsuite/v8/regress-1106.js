
































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
  assertEquals(5, f());
}
%OptimizeFunctionOnNextCall(f);
assertEquals(5, f());


x.gee = function() {
  return 42;
};
function g() {
  return gee();
};
%PrepareFunctionForOptimization(g);
for (i = 0; i < 5; ++i) {
  assertEquals(42, g());
}
%OptimizeFunctionOnNextCall(g);
assertEquals(42, g());
