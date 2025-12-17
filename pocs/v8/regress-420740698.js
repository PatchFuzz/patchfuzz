function runNearStackLimit(f) {
  try {
    return t();
  } catch (e) {
    return f();
  }
}
let lazy = () => fail();
(function () {
  async function foo() {
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 4; j++) {
        lazy | 5;
        await 7;
      }
    }
  }
  %PrepareFunctionForOptimization(foo);
  try {
  runNearStackLimit(() => {
    return foo();
  });
  } catch {};
  %OptimizeFunctionOnNextCall(foo);
  try { foo(); } catch {};
})();
