function main() {
  const {
    getExtrasBindingObject: v0,
  } = d8;
  const {
    getContinuationPreservedEmbedderData: v2,
    setContinuationPreservedEmbedderData: v3
  } = v0();
  function f0(v5) {
      v3(v5);
    return v2();
  }
  const v4 = v6 => {
    const v7 = (%PrepareFunctionForOptimization(f0), f0(), %OptimizeFunctionOnNextCall(f0), f0(v6));
      gc();
      v7();
  };
  %PrepareFunctionForOptimization(v4);
  try {
    v4({});
  } catch (e) {}
}
%PrepareFunctionForOptimization(main);
main();
main();
%OptimizeFunctionOnNextCall(main);
main();
