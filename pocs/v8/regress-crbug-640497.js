function g(v) {
  return v.length;
}
print(1, g("x"));
print(2, g("xy"));
print(1, g([1]));
print(2, g([1, 2]));


function f() {
  print(0, g([]));
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
