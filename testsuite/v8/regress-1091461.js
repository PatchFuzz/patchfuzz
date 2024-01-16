





function foo(a, b) {
  let x = a + b;
}
function test() {
  try {
    foo(1n, 1n);
  } catch (e) {}
}

%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
