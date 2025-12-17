function h() {}

function f() {
  var a = null;
  h(a = arguments);
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
