



































function f(x) {
  switch (x) {
    case 1:
      return 1.4;
    case 2:
      return 1.5;
    case 3:
      return {};
    default:
      gc();
  }
}

function g(x) {
  return [1.1, 1.2, 1.3, f(x)];
}


;
%PrepareFunctionForOptimization(g);
assertEquals([1.1, 1.2, 1.3, 1.4], g(1));
assertEquals([1.1, 1.2, 1.3, 1.5], g(2));
%OptimizeFunctionOnNextCall(g);


assertEquals([1.1, 1.2, 1.3, {}], g(3));



assertEquals([1.1, 1.2, 1.3, undefined], g(4));
