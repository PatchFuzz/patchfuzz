





function h(a) {
  return a[1];
}
assertEquals(0, h(new Int8Array(10)));
assertEquals(0, h(new Int8Array(10)));

function g() {
  return h(arguments);
}
function f() {
  return g(23, 42);
};
%PrepareFunctionForOptimization(f);
assertEquals(42, f());
assertEquals(42, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(42, f());
