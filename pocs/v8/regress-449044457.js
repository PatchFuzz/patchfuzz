function foo(arr) {
  let v = 4.65;
    for (let i = 0; i < 1; i++) {
      v = arr[i];
    }
  return [v];
}

let a = [, 1.1];

%PrepareFunctionForOptimization(foo);
 foo(a);
%OptimizeMaglevOnNextCall(foo);
let r = foo(a);

function removeHoles(a) {
  return a.filter(x => true);
}
print(1, removeHoles(r).length);
