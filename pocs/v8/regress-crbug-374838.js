function foo() {
  var a = [0];
  result = 0;
  for (var i = 0; i < 4; i++) {
    result += a.length;
    a.shift();
  }
  return result;
};
%PrepareFunctionForOptimization(foo);
print(1, foo());
print(1, foo());
%OptimizeFunctionOnNextCall(foo);
print(1, foo());
