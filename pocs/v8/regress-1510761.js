function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

let int64Max = 9223372036854775807n;

%PrepareFunctionForOptimization(add);
print(3n, add(1n, 2n));
%OptimizeFunctionOnNextCall(add);
print(3n, add(1n, 2n));

print(int64Max + int64Max, add(int64Max, int64Max));

%PrepareFunctionForOptimization(sub);
print(-1n, sub(1n, 2n));
%OptimizeFunctionOnNextCall(sub);
print(-1n, sub(1n, 2n));

print(int64Max + int64Max, sub(int64Max, -int64Max));

%PrepareFunctionForOptimization(mul);
print(6n, mul(2n, 3n));
%OptimizeFunctionOnNextCall(mul);
print(6n, mul(2n, 3n));

print(int64Max * int64Max, mul(int64Max, int64Max));
