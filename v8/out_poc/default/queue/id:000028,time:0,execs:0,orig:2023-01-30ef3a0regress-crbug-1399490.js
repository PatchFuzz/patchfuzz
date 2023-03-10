






const fast_c_api = new d8.test.FastCAPI();

function foo() {
  fast_c_api.enforce_range_compare_u64(undefined, "", "/0/");
}

%PrepareFunctionForOptimization(foo);
try {
  foo();
} catch {
}

%OptimizeFunctionOnNextCall(foo);
try {
  foo();
} catch {
}
