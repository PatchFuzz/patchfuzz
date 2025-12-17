function MyWrapper(v) {
  return {
    valueOf: function() {
      return v;
    }
  };
}

function f() {
  print("a" < "x");
  print("a" < new String("y"));
  print("a" < new MyWrapper("z"));

  print("a" > "x");
  print("a" > new String("y"));
  print("a" > new MyWrapper("z"));
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
