





function MyWrapper(v) {
  return {
    valueOf: function() {
      return v;
    }
  };
}

function f() {
  assertEquals("truex", true + "x");
  assertEquals("truey", true + new String("y"));
  assertEquals("truez", true + new MyWrapper("z"));

  assertEquals("xtrue", "x" + true);
  assertEquals("ytrue", new String("y") + true);
  assertEquals("ztrue", new MyWrapper("z") + true);
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
