





const re = /abc/;


re.__proto__.__proto__.test = re.__proto__.test;
delete re.__proto__.test;

function foo(s) {
  return re.test(s);
};
%PrepareFunctionForOptimization(foo);
assertTrue(foo('abc'));
assertTrue(foo('abc'));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo('abc'));
assertFalse(foo('ab'));
