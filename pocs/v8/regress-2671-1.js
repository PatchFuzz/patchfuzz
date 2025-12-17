var y;
function f() {
  var a = [];
  a[20] = 0;
  y = 3;
  var i = 7 * (y + -0);
  a[i]++;
  print(isNaN(a[i]));
}
%PrepareFunctionForOptimization(f);

%PrepareFunctionForOptimization(f);
f();
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
