function f() {
  return 42;
}

function g() {
  return 52;
}

%NeverOptimizeFunction(f);

function foo(cond) {
  let func;
  if (cond) {
    func = f;
  } else {
    func = g;
  }
  func();
}

%PrepareFunctionForOptimization(foo);
foo(true);
foo(false);
%OptimizeFunctionOnNextCall(foo);
foo(true);
foo(false);



print(f);
