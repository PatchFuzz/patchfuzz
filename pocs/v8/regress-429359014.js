function bar(a) {
  let ret;
  for (let i = 0; i < 2; i++) ret = a[i];
  return [ret];
}

const arr = [0.0, , 14.14];

%PrepareFunctionForOptimization(bar);
bar(arr);
%OptimizeFunctionOnNextCall(bar);

const result = bar(arr);
const withoutHoles = result.filter(x => true);
print(1, withoutHoles.length);
print(undefined, withoutHoles[0]);
