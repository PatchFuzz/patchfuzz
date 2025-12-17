function opt(){
  const v0 = [];
  let v1 = Infinity;
  const v2 = v1.E;
  for (let v5 = -1; v5 > v0; v5 = v5 & -1) {
    for (let v6 = v5; v6 <= -1; v6 = v6 + v2) {
      const v7 = v1++;
      for (let v9 = v6; v9 <= v7; v9 = v9 + v5) {
      }
    }
  }
}



%PrepareFunctionForOptimization(opt);
%OptimizeFunctionOnNextCall(opt);
let jit_a2 = opt();
