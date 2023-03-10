





var f = (a, b, ...c) => {
  print(a);
  print(b);
  print(c);
  print(6, a);
  print(5, b);
  print([4, 3, 2, 1], c);
};

function g() {
  f(6, 5, 4, 3, 2, 1);
};

%PrepareFunctionForOptimization(g);
g();
g();
g();

%OptimizeFunctionOnNextCall(g);
g();
