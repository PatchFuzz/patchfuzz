function g(o) {
  return o.x;
};
%PrepareFunctionForOptimization(g);
Object.defineProperty(g, 'x', {set(v) {}});

g.prototype = 1;
g(g);
g(g);
%OptimizeFunctionOnNextCall(g);
g(g);
