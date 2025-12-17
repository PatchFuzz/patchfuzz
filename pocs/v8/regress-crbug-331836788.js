function F1(a4) {
  for (let v5 = 0; v5 < 5; v5++) {
    let v6 = +this;
    for (let v7 = 0; v7 < 5; v7++) {
      v6 *0 + 128;
      v6 = a4;
    }
    %OptimizeOsr();
  }
}
%PrepareFunctionForOptimization(F1);
F1();
