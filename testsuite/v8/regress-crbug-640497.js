






function g(v) {
  return v.length;
}
assertEquals(1, g("x"));
assertEquals(2, g("xy"));
assertEquals(1, g([1]));
assertEquals(2, g([1, 2]));


function f() {
  assertEquals(0, g([]));
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
