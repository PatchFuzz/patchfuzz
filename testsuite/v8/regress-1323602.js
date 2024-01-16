





let g;

function test() {
  const ten = 10;
  const x = 10 / ten;
  const y = Math.floor(x);
  g = x;
  return y + 1;
}

%PrepareFunctionForOptimization(test);
assertEquals(2, test());
%OptimizeFunctionOnNextCall(test);
assertEquals(2, test());
