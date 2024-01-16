





function f() {
  g();
}

function g() {
  %DeoptimizeFunction(f);
  %DeoptimizeFunction(f);
}

%PrepareFunctionForOptimization(f);
f(); f();
%OptimizeFunctionOnNextCall(f);
f();
