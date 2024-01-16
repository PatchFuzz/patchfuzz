





function foo()
{
    return 1 in [0];
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
assertOptimized(foo);
