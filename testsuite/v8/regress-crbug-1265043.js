





val = "hello";
function foo(i) {
  return val[i];
}
assertEquals(undefined, foo(8));
Object.prototype[4294967295] = "boom";
assertEquals("boom", foo(4294967295));
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo(8));
assertEquals("boom", foo(4294967295));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo(8));
assertEquals("boom", foo(4294967295));
