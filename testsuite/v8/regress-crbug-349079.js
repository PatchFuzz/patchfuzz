





function assertEquals(expected, found) {
  return found === expected;
};
%NeverOptimizeFunction(assertEquals);

function crash() {
  var a = 1;
  var b = -0;
  var c = 1.5;
  assertEquals(b, Math.max(b++, c++));
  assertEquals(c, Math.min(b++, c++));
  assertEquals(b, Math.max(b++, a++));
};
%PrepareFunctionForOptimization(crash);
crash();
crash();
%OptimizeFunctionOnNextCall(crash);
crash();
