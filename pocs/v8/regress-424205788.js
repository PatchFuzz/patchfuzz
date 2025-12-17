function f1(a2) {
    const v6 = ("string").codePointAt(1196);
  (a2 || v6)?.c;
  return a2;
}
%PrepareFunctionForOptimization(f1);
print(0, f1(0));
%OptimizeFunctionOnNextCall(f1);
print(0, f1(0));
