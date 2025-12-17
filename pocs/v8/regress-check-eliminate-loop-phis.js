function f() {
  var o = {x:1};
  var y = {y:2.5, x:0};
  var result;
  for (var i = 0; i < 2; i++) {
    result = o.x + 3;
    o = y;
  }
  return result;
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
print(3, f());
