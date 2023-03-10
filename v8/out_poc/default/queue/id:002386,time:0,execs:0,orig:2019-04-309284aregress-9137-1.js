






function changeMap(obj) {
  obj.blub = 42;
}

function foo(obj) {
  return obj.bind(changeMap(obj));
}

%NeverOptimizeFunction(changeMap);
%PrepareFunctionForOptimization(foo);
foo(function(){});
foo(function(){});
%OptimizeFunctionOnNextCall(foo);
foo(function(){});
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(function(){});
print(foo);
