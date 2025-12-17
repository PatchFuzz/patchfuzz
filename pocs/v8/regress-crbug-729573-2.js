function bar(x) {
  "use strict";
  return this + x;
}

function foo(f) {
  var a = bar.bind(42, 1);
  return f() ? 0 : a;
};
%PrepareFunctionForOptimization(foo);
function t() {
  return true;
}

print(0, foo(t));
print(0, foo(t));
%OptimizeFunctionOnNextCall(foo);
var a = foo(_ => false);
print(43, a());
