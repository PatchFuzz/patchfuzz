function foo() {
  let x = 2147483648;
  do {
    let y = 1;
    y++;
    x + y;
    x = Math;
  } while (x < 6)
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
