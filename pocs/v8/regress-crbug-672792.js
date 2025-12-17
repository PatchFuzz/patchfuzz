eval("function f() { return [" + String("0.1,").repeat(65535) + "] }");

%PrepareFunctionForOptimization(f);


print(65535, f().length);


print(65535, f().length);


%OptimizeFunctionOnNextCall(f);
print(65535, f().length);
