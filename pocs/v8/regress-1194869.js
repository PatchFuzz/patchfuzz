function f() {
  return "".indexOf("", 2);
}

%PrepareFunctionForOptimization(f)
print(f(), 0);
print(f(), 0);
%OptimizeFunctionOnNextCall(f)
print(f(), 0);
print(f(), 0);

function g() {
  return "".indexOf("", 2);
}
for (let i = 0; i < 191; i++) {
  
  print(g(), 0);
}
