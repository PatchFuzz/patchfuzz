





function foo() {}
function bar(...args) {
  foo.apply(...args);
}

%PrepareFunctionForOptimization(bar);
print('bar(2,3,4)');
print('bar(2,3,4)');
%OptimizeMaglevOnNextCall(bar);
print('bar(2,3,4)');
