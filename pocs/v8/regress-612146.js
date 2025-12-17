function f() {
  var arguments_ = arguments;
  if (undefined) {
    while (true) {
      arguments_[0];
    }
  } else {
    %DeoptimizeNow();
    return arguments_[0];
  }
};
%PrepareFunctionForOptimization(f);
;
f(0);
f(0);
%OptimizeFunctionOnNextCall(f);
print(1, f(1));

function g() {
  var a = arguments;
  %DeoptimizeNow();
  return a.length;
};
%PrepareFunctionForOptimization(g);
g(1);
g(1);
%OptimizeFunctionOnNextCall(g);
print(1, g(1));
