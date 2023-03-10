





function f() {
  try {
    o;
  } catch (e) {
    return e;
  }
  return 0;
}

function deopt() {
  %DeoptimizeFunction(f);
  throw 42;
}

%NeverOptimizeFunction(deopt);

this.__defineGetter__("o", deopt );

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
print(42, f());
