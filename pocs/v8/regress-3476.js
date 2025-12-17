function MyWrapper(v) {
  return {
    valueOf: function() {
      return v;
    }
  };
}

function f() {
  print("truex", true + "x");
  print("truey", true + new String("y"));
  print("truez", true + new MyWrapper("z"));

  print("xtrue", "x" + true);
  print("ytrue", new String("y") + true);
  print("ztrue", new MyWrapper("z") + true);
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
