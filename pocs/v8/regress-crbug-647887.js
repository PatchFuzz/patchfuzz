function f(obj) {
  var key;
  for (key in obj) { }
  return key === undefined;
}

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(f({ foo:0 }));
