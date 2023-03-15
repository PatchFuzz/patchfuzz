





function f(x) {
  var s = x ? "0" : "1";
  return 1 + Number(s);
}

%PrepareFunctionForOptimization(f);
f(0);
f(0);
%OptimizeFunctionOnNextCall(f);
print(2, f(0));
