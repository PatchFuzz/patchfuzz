function test() {
  print("Infinity", String(Math.pow(Infinity, 0.5)));
  print(0, Math.pow(Infinity, -0.5));

  print("Infinity", String(Math.pow(-Infinity, 0.5)));
  print(0, Math.pow(-Infinity, -0.5));
};
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
