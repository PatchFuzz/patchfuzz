





function f() {
  return { value: NaN };
}

%PrepareFunctionForOptimization(f);
f();
f();

let x = { value: "Y" };

%OptimizeFunctionOnNextCall(f);
f();
