function main() {
  let v0 = 1.5;
  do {
    const v5 = BigInt.asIntN(6, 4n);
    const v6 = v5 / v5;
    const v7 = v6 / v6;
    do {
      [v7];
    } while (v0 < 0);
    --v0;
  } while (v0 < 0);
}
%PrepareFunctionForOptimization(main);
main();
%OptimizeFunctionOnNextCall(main);
main();
