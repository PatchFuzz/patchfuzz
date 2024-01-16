






for (let i = 0; i < 2; i++) {
  try { new this.invalid(); } catch {}

  function invalid(x) {
    "use asm";
    var y = x.Math.fround;
    function foo() {}
    return {foo: foo};
  }

  %PrepareFunctionForOptimization(invalid);
  %OptimizeFunctionOnNextCall(invalid);
}
