const v0 = [-10];
function f1() {
  let v2 = 1;
  let count = 0;
  for (let i3 = v2;i3 >= v2; i3 += v2) {
    if (count == 4) {
      %OptimizeOsr();
    }
    if (count == 40) break;
    const v10 = v2 && i3;
    v0[v10];
    v2 = v10;
    count++;
  }
}
%PrepareFunctionForOptimization(f1);
f1();
