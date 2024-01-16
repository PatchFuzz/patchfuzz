





function f() {
  with ({ value:"foo" }) { return value; }
}
%PrepareFunctionForOptimization(f);
assertEquals("foo", f());
%OptimizeFunctionOnNextCall(f);
assertEquals("foo", f());
