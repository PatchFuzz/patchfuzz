function foo(b) {
    let x = 3.1;
    if(b) x = 1;
    return x ** Infinity;
}

%PrepareFunctionForOptimization(foo);
print(NaN, foo(true));
print(Infinity, foo(false));
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo(true));
print(Infinity, foo(false));
