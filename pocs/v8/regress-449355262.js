function foo(g) {
    var obj = {};
    obj.prop0 = function () {
      try {
        if(g) __call_nonexisting_function();
        return 3.1;
      } catch (e) {}
    }();

    return obj;
}

%PrepareFunctionForOptimization(foo);
foo(false);
foo(false);
%OptimizeMaglevOnNextCall(foo);
foo(false);
print(foo);
foo(true);


print(foo);
