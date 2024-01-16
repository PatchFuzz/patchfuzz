





let a = [];
Object.defineProperty(a, "length", {writable: false});
function f() {
  return a.pop();
}
assertThrows(f, TypeError, /Cannot assign to read only property 'length'/);

%PrepareFunctionForOptimization(f);
for (let i = 0; i < 3; i++) {
  assertThrows(f, TypeError, /Cannot assign to read only property 'length'/);
}
%OptimizeFunctionOnNextCall(f);
assertThrows(f, TypeError, /Cannot assign to read only property 'length'/);
