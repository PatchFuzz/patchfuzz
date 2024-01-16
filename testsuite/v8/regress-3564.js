





function MyWrapper(v) {
  return {
    valueOf: function() {
      return v;
    }
  };
}

function f() {
  assertTrue("a" < "x");
  assertTrue("a" < new String("y"));
  assertTrue("a" < new MyWrapper("z"));

  assertFalse("a" > "x");
  assertFalse("a" > new String("y"));
  assertFalse("a" > new MyWrapper("z"));
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
