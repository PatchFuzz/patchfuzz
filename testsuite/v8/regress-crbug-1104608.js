





const kSize = 4294967296;

if (%TypedArrayMaxLength() >= kSize) {
  const array = new Uint8Array(kSize);

  function f() {
    let result = array["4294967295"];
    assertEquals(0, result);
  }

  function g() {
    array["4294967295"] = 1;
  }

  %PrepareFunctionForOptimization(f);
  for (var i = 0; i < 3; i++) f();
  %OptimizeFunctionOnNextCall(f);
  f();

  %PrepareFunctionForOptimization(g);
  for (var i = 0; i < 3; i++) g();
  %OptimizeFunctionOnNextCall(g);
  g();
}
