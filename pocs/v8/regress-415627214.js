const v1 = new Map();

function f2() {
    v1.size |= 1466662225;
    return v1;
}

%PrepareFunctionForOptimization(f2);
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
