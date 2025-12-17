let v0 = 405;
function foo() {
    v0 <<= 1000;
}
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeMaglevOnNextCall(foo);
foo();
