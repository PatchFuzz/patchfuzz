const a = {toString: () => {
  console.log("print arguments", print.arguments);
}};

function g(x) {
  print(x);
}

%PrepareFunctionForOptimization(g);
g(a);
g(a);
%OptimizeFunctionOnNextCall(g);
g(a);
