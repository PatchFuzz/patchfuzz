let a = [];
Object.defineProperty(a, "length", {writable: false});
function f() {
  return a.pop();
}
print(f, TypeError, /Cannot assign to read only property 'length'/);

%PrepareFunctionForOptimization(f);
for (let i = 0; i < 3; i++) {
  print(f, TypeError, /Cannot assign to read only property 'length'/);
}
%OptimizeFunctionOnNextCall(f);
print(f, TypeError, /Cannot assign to read only property 'length'/);
