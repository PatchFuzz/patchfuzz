function g(b) {
  const _ = Object.getOwnPropertyDescriptors(g);
  
}

function f(...a) {
  g(a);
}

%PrepareFunctionForOptimization(f);
%PrepareFunctionForOptimization(g);
f([]);
%OptimizeFunctionOnNextCall(f);
f([]);
