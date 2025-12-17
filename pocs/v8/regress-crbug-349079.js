function print(expected, found) {
  return found === expected;
};
%NeverOptimizeFunction(assertEquals);

function crash() {
  var a = 1;
  var b = -0;
  var c = 1.5;
  print(b, Math.max(b++, c++));
  print(c, Math.min(b++, c++));
  print(b, Math.max(b++, a++));
};
%PrepareFunctionForOptimization(crash);
crash();
crash();
%OptimizeFunctionOnNextCall(crash);
crash();
