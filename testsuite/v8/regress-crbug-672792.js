






eval("function f() { return [" + String("0.1,").repeat(65535) + "] }");

%PrepareFunctionForOptimization(f);


assertEquals(65535, f().length);


assertEquals(65535, f().length);


%OptimizeFunctionOnNextCall(f);
assertEquals(65535, f().length);
