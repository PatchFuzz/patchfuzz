function f() {
  var o = {};
  o["<abc>"] = 123;
}

%PrepareFunctionForOptimization(f);
f();
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
print(f);
