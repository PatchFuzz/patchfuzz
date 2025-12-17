function foo(x) {
  return BigInt(x);
}

function bar() {
  for (let i = 0; i < 1; ++i) {
    
    
    function t() { }
    foo(i);
  }
}

%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
