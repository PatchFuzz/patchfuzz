var x = false;
function foo() {
    return x < x;
}
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
print(foo());
