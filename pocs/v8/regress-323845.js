function h() {
  g.arguments;
}

function g(x) {
  h();
}

function f() {
  g({});
};
%PrepareFunctionForOptimization(f);
f();
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
