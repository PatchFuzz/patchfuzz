var o = [6, 7, 8, 9];

function f(b) {
  var v = o.pop() + b;
  return v;
};
%PrepareFunctionForOptimization(f);
print(10, f(1));
print(9, f(1));
print(8, f(1));
%OptimizeFunctionOnNextCall(f);
print("61", f("1"));
