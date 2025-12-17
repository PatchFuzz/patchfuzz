var a = { x: 1.1 };
a.x = 0;
var G = a.x;
var o = { x: {} };

function func() {
  return {x: G};
};
%PrepareFunctionForOptimization(func);
func();
func();
%OptimizeFunctionOnNextCall(func);
print(0, func().x);
