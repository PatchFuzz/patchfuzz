function use(x) {}

function test(a1, a2) {
   use(++a2 ** -2147483647);
}

%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test(2147483649, -936768208);
