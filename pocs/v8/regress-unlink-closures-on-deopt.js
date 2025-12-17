function foo() {
  function g(o) {
    return o.f;
  }
  return g;
}

let g1 = foo();
let g2 = foo();
%PrepareFunctionForOptimization(g1);

g1({ f : 1});
g1({ f : 2});
g2({ f : 2});
g2({ f : 2});

%OptimizeFunctionOnNextCall(g1);
g1({ f : 1});

%PrepareFunctionForOptimization(g2);
%OptimizeFunctionOnNextCall(g2);
g2({ f : 2});
g1({});

print(g1);





print(g2);

g2({});
