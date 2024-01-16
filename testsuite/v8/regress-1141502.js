






function bar(a) {
  return a.x;
}

function foo(a) {
  return 1 * bar(a);
}

var obj = {x: 2};

%PrepareFunctionForOptimization(foo);
foo(obj, obj);
%OptimizeFunctionOnNextCall(foo);
assertThrows(() => foo());
