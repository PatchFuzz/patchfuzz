const x = Math.atanh();

function foo() {
    const arr = Array();
    arr[153] = x;
    %PrepareFunctionForOptimization(foo);
    %OptimizeMaglevOnNextCall(foo);
}

for(let i = 0; i < 3; ++i) {
  foo();
}
