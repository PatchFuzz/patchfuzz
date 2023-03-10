





function foo(b) {
  var x = -0;
  var y = -0x80000000;

  if (b) {
    x = -1;
    y = 1;
  }

  return (x - y) == -0x80000000;
}

%PrepareFunctionForOptimization(foo);
print(foo(true));
%OptimizeFunctionOnNextCall(foo);
print(foo(false));
