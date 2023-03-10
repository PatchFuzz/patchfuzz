





function f(a) {
  var x;
  a = a|0;
  var dummy;
  if (a === 1) {
    x = 277.5;
  } else if (a === 2) {
    x = 0;
  } else {
    dummy = 527.5;
    dummy = 958.5;
    dummy = 1143.5;
    dummy = 1368.5;
    dummy = 1558.5;
    x = 277.5;
  }
  return +x;
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
print(277.5, f());
