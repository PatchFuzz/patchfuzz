




























function outer() {
  var val = 0;

  function foo() {
    val = 0;
    val;
    var z = false;
    var y = true;
    if (!z) {
      while (z = !z) {
        if (y) val++;
      }
    }
    return val++;
  };
  %PrepareFunctionForOptimization(foo);
  return foo;
}

var foo = outer();

assertEquals(1, foo());
assertEquals(1, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(1, foo());
