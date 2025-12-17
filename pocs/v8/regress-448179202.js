function __wrapTC(f, permissive = true) {
  try {
    return f();
  } catch (e) {
  }
}

function foo(x) {
  let v_nan = __wrapTC(() => Math.atanh(x));
  let v_undefined = __wrapTC();
  return [v_nan, v_undefined];
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
let r = foo(2);
print(NaN, r[0]);
print(undefined, r[1]);
