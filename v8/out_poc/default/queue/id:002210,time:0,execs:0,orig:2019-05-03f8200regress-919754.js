






function f(get, ...a) {
  for (let i = 0; i < 1000; i++) {
    if (i === 999) %OptimizeOsr();
    a.map(f);
  }
  return get();
}
%PrepareFunctionForOptimization(f);
print(f);
