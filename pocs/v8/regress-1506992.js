function foo(arg) {
    [0, 0].map(()=>{
        let tmp = arg;
        arg = 1.1;
        return tmp
    })
}

%PrepareFunctionForOptimization(foo);
foo(0);
foo(0);
%OptimizeFunctionOnNextCall(foo);
foo([]);
