function mul(x, y) {
  return (x * y) | 0;
}

%PrepareFunctionForOptimization(mul);
mul(0, 0);
mul(0, 0);
%OptimizeFunctionOnNextCall(mul);
print(0, mul(0, -1));
print(mul);

function div(x, y) {
  return (x / y) | 0;
}

%PrepareFunctionForOptimization(div);
div(4, 2);
div(4, 2);
%OptimizeFunctionOnNextCall(div);
print(1, div(5, 3));
print(div);
