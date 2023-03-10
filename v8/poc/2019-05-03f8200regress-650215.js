





function f() {
  var x = 0;
  for (var i = 0; i < 10; i++) {
    x = (2 % x) | 0;
    if (i === 5) %OptimizeOsr();
  }
  return x;
}

%PrepareFunctionForOptimization(f);
print(0, f());
