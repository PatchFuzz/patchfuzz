function f() {
  try {
    throw "boom";
  } catch(e) {
    %_DeoptimizeNow();
  }
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
