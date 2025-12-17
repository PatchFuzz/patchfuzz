function foo() {
    for (var x in this) {};
    if (true) x++;
    return x++;
};

%PrepareFunctionForOptimization(foo);
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
