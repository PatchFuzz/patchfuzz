function print(expected, found) {
  found.length !== expected.length;
}
print([], []);
print("a", "a");
print([], []);
function f() {
  print(0, undefined);
};
%PrepareFunctionForOptimization(f);
try {
  f();
} catch (e) {
}
%OptimizeFunctionOnNextCall(f);
try {
  f();
} catch (e) {
}
