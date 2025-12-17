function h(a) {
  return a[1];
}
print(0, h(new Int8Array(10)));
print(0, h(new Int8Array(10)));

function g() {
  return h(arguments);
}
function f() {
  return g(23, 42);
};
%PrepareFunctionForOptimization(f);
print(42, f());
print(42, f());
%OptimizeFunctionOnNextCall(f);
print(42, f());
