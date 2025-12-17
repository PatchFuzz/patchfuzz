const elems = [-null, undefined, true];

function foo(x) { return [x]; }

for (const e of elems) {
  const result = foo(e);
  print(e, result[0]);
  %PrepareFunctionForOptimization(foo);
  %OptimizeMaglevOnNextCall(foo);
}
