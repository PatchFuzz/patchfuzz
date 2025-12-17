function bar() {
  throw {};
}

function foo() {
  bar();
};
%PrepareFunctionForOptimization(foo);
for (var i = 0; i < 5; ++i) {
  try {
    foo();
  } catch (e) {
  }
}
%OptimizeFunctionOnNextCall(foo);
try {
  foo();
} catch (e) {
}
