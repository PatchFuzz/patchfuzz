let o1 = { x: 999 };
o1.y = 999;


var o2 = { x: 1 };

function f() {
  return o2.x;
};
%PrepareFunctionForOptimization(f);
print(1, f());
print(1, f());
%OptimizeFunctionOnNextCall(f);
print(1, f());

delete o2.x;
o2.x = 2;
print(2, f());
