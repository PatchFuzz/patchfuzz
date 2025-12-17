function foo(a) {
  var sum = 0;
  var a = [0, "a"];
  for (var i in a) {
    sum += a[i];
  }
  return sum;
}

%PrepareFunctionForOptimization(foo);
print("0a", foo());
print("0a", foo());
%OptimizeFunctionOnNextCall(foo);
print("0a", foo());
