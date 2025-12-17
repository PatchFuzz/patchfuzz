function f(len) {
  return new Array(len);
}

%PrepareFunctionForOptimization(f);
print(3, f(3).length);
print(18, f(18).length);
%OptimizeFunctionOnNextCall(f);
print(4, f(4).length);
print(f);
let a = f("8");
print(f);
print(1, a.length);
print("8", a[0]);


%PrepareFunctionForOptimization(f);
print(1, f(1).length);
%OptimizeFunctionOnNextCall(f);
print(8, f(8).length);
print(f);
print(1, f("8").length);
print(f);
