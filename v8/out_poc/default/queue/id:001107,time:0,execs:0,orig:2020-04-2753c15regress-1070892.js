





var v = {0: 0, 1: 1, '01': 7};
function foo(index) {
    return [v[index], v[index + 1], index + 1];
};

%PrepareFunctionForOptimization(foo);
print(foo(0), [0, 1, 1]);
print(foo(0), [0, 1, 1]);
%OptimizeFunctionOnNextCall(foo);
print(foo(0), [0, 1, 1]);
print(foo('0'), [0, 7, '01']);
