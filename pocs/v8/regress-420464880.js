bar = undefined;
function foo() {
  try {
    let i = 0;
    let v;
    bar = function () { i++; };
    while (i < 6) {
      bar();
      v = i;
      if (i == 5) %OptimizeOsr();
    }
    return v;
  } catch (e) {}
}
%PrepareFunctionForOptimization(foo);
foo();
print(6, foo());
