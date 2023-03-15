





var a = [, 2.121736758e-314];

function foo() { return a[1]; }

%PrepareFunctionForOptimization(foo);
print(2.121736758e-314, foo());
print(2.121736758e-314, foo());
%OptimizeFunctionOnNextCall(foo);
print(2.121736758e-314, foo());
