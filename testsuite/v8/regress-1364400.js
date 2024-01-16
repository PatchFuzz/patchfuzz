





function foo(deopt, x) {
  x = x >>> 0;
  return deopt ? Math.max(x) : x;
}

function bar(deopt) {
  return foo(deopt, 4294967295);
};

%PrepareFunctionForOptimization(bar);
%PrepareFunctionForOptimization(foo);
bar(false);
%OptimizeFunctionOnNextCall(bar);


assertEquals(4294967295, bar(true));
