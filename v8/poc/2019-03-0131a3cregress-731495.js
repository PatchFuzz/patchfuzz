





function foo() {
  global = "";
  global = global + "bar";
  return global;
};

%PrepareFunctionForOptimization(foo);
print(foo(), "bar");
%OptimizeFunctionOnNextCall(foo);
print(foo(), "bar");
