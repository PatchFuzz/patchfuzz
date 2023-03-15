





let dummy = {x: 0.1};

let o = {x: 0};

function f(o, v) {
  o.x = v;
};
%PrepareFunctionForOptimization(f);
f(o, 0);
f(o, 0);
print(Infinity, 1 / o.x);
%OptimizeFunctionOnNextCall(f);
f(o, -0);
print(-Infinity, 1 / o.x);
