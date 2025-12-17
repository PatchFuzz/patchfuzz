function main() {
  for (let b = 0; b < 20; b++) {
    Math.abs(Math.max(b, -16)) - b;
  }
}

%PrepareFunctionForOptimization(main);
main();
%OptimizeFunctionOnNextCall(main);
main();
