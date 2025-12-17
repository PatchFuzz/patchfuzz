function poly(x) {
  return x.foo;
};
%PrepareFunctionForOptimization(poly);
var one = {foo: 0};
var two = {foo: 0, bar: 1};
var three = {bar: 0};
three.__proto__ = {};
three.__proto__.__proto__ = {};
three.__proto__.__proto__.__proto__ = {};
three.__proto__.__proto__.__proto__.__proto__ = {};
three.__proto__.__proto__.__proto__.__proto__.__proto__ = {};

poly(one);
poly(two);
poly(three);

%OptimizeFunctionOnNextCall(poly);

poly(one);
poly(two);
poly(three);
