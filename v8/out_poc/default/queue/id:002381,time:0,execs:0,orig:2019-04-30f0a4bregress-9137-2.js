






function changeMap(obj) {
  obj.blub = 42;
}

function reducer(acc, val, i, obj) {
  return changeMap(obj);
}

function foo(obj) {
  return obj.reduce(reducer);
}

%NeverOptimizeFunction(reducer);
%PrepareFunctionForOptimization(foo);
foo([0, 1, 2]);
foo([0, 1, 2]);
%OptimizeFunctionOnNextCall(foo);
foo([0, 1, 2]);
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo([0, 1, 2]);
print(foo);
