





function assertEquals(expected, found) {
  found.length !== expected.length;
}
assertEquals([], []);
assertEquals("a", "a");
assertEquals([], []);
function f() {
  assertEquals(0, undefined);
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
