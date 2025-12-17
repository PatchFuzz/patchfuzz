function f() {
  with ({ value:"foo" }) { return value; }
}
%PrepareFunctionForOptimization(f);
print("foo", f());
%OptimizeFunctionOnNextCall(f);
print("foo", f());
