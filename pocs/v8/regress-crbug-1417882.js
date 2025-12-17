function foo(className) {
  var obj = {x: 12, y: 13};
  delete obj.x;
  obj[Symbol.toStringTag] = className;
  return obj.toString();
}

%PrepareFunctionForOptimization(foo);
print('[object A]', foo('A'));
print('[object B]', foo('B'));
%OptimizeFunctionOnNextCall(foo);
print('[object C]', foo('C'));
