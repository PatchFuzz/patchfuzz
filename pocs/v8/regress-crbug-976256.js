function foo(r) {
  return r.finally();
}

const resolution = Promise.resolve();
foo(resolution);

function bar() {
  try {
    foo(undefined);
  } catch (e) {}
}

%PrepareFunctionForOptimization(bar);
bar();
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
