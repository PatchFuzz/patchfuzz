function __wrapTC(f, permissive = true) {
  try {
    return f();
  } catch (e) {
  }
}

function foo() {
  const __v_13 = __wrapTC(() => undefined);
  return [ __v_13];
}

const __v_8 = __wrapTC();
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
print([undefined], foo());
