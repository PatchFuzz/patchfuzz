





function bar(o) {
  return o.hello, Object.getPrototypeOf(o);
};
%PrepareFunctionForOptimization(bar);
var y = { __proto__: {}, hello: 44 };
var z = { hello: 45 };

bar(y);
bar(z);
bar(y);
%OptimizeFunctionOnNextCall(bar);
bar(y);
