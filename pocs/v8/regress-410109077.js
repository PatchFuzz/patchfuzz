%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();

let slot = 1;
function foo() {
  return slot;
}

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();

function bar() {
  try {
    slot = undefined;
  } catch (e) {}
}

bar();
print(undefined, foo());
