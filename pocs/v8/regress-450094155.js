function f2() {
  while (true){
    for (let i = 0; i < 5; i++) {
      %OptimizeOsr();
      eval();
    }
    break;
  }
  return 0;
}
%PrepareFunctionForOptimization(f2);

f2();
f2();
