






function test() {
  for (let v1 = 0; v1 < 1; v1++) {
    const v3 = BigInt(v1);
    ([("1244138209").length]).includes(5, -2147483649);
    v3 << 51n;
  }
}

%PrepareFunctionForOptimization(test);
test();
%OptimizeFunctionOnNextCall(test);
test();
