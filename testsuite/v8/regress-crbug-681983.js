





function g(a) {
  a = a >>> 0;
  %_DeoptimizeNow();
  return a;
}

function f() {
  return g(-1);
}

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
assertEquals(4294967295, f());
