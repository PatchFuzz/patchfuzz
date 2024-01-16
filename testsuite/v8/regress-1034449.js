






function f(len) {
  return new Array(len);
}

%PrepareFunctionForOptimization(f);
assertEquals(3, f(3).length);
assertEquals(18, f(18).length);
%OptimizeFunctionOnNextCall(f);
assertEquals(4, f(4).length);
assertOptimized(f);
let a = f("8");
assertUnoptimized(f);
assertEquals(1, a.length);
assertEquals("8", a[0]);


%PrepareFunctionForOptimization(f);
assertEquals(1, f(1).length);
%OptimizeFunctionOnNextCall(f);
assertEquals(8, f(8).length);
assertOptimized(f);
assertEquals(1, f("8").length);
assertOptimized(f);
