function f(a0) {
    return "c".endsWith(a0);
}

function opt_me() {
    let i = 0xCCCC>>1;
    i++;
    let arr = [i];
    arr.some(f);
}

%PrepareFunctionForOptimization(f);
%PrepareFunctionForOptimization(opt_me);
opt_me();
opt_me();
opt_me();
%OptimizeFunctionOnNextCall(opt_me);
opt_me();
