function test(i) {
  
  Math.sin(i / 1779 * Math.PI);
  
  
  print(0, Math.sin(0));
};
%PrepareFunctionForOptimization(test);
for (i = 0; i < 10000; ++i) {
  test(i);
  if (i == 0) %OptimizeFunctionOnNextCall(test);
}
