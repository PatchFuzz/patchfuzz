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

print(1, foo());
print(1, foo());
%OptimizeFunctionOnNextCall(foo);
print(1, foo());
