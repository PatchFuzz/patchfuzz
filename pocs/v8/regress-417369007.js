function foo() {
    let [val] = [undefined];
    return val;
}

%PrepareFunctionForOptimization(foo);
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());
