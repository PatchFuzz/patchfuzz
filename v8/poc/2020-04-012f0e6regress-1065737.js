





function foo() {
  class c {
    static get [v = 0]() {}
  }
}

%PrepareFunctionForOptimization(foo);
print(foo, ReferenceError);
print(foo, ReferenceError);
%OptimizeFunctionOnNextCall(foo);
print(foo, ReferenceError);
