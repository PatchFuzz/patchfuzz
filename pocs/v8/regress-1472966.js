function foo() {
    const v11 = 8 * (8 >> undefined);
    const v12 = v11 + v11;
    return v12 + v12;
}

%PrepareFunctionForOptimization(foo);
print(256, foo());
%OptimizeFunctionOnNextCall(foo);
print(256, foo());
