





let dummy = { x : {} };

let o = { x : 0.1 };

function f(o, a, b) {
  o.x = a + b;
}

%PrepareFunctionForOptimization(f);
f(o, 0.05, 0.05);
f(o, 0.05, 0.05);
%OptimizeFunctionOnNextCall(f);
f(o, 0.05, 0.05);
print(f);
