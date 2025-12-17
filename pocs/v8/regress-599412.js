function h(a) {
  if (!a) return false;
  print();
}

function g(a) {
  return a.length;
}
g('0');
g('1');

function f() {
  h(g([]));
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
