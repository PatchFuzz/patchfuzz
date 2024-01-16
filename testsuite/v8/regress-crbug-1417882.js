





function foo(className) {
  var obj = {x: 12, y: 13};
  delete obj.x;
  obj[Symbol.toStringTag] = className;
  return obj.toString();
}

%PrepareFunctionForOptimization(foo);
assertEquals('[object A]', foo('A'));
assertEquals('[object B]', foo('B'));
%OptimizeFunctionOnNextCall(foo);
assertEquals('[object C]', foo('C'));
