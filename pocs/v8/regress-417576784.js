function foo() {
    var a = [];
    a[10012] = 1;
    var r = [undefined].concat(a);
    return r[0];
}

%PrepareFunctionForOptimization(foo);
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());
