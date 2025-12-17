const re = /abc/;


re.__proto__.__proto__.test = re.__proto__.test;
delete re.__proto__.test;

function foo(s) {
  return re.test(s);
};
%PrepareFunctionForOptimization(foo);
print(foo('abc'));
print(foo('abc'));
%OptimizeFunctionOnNextCall(foo);
print(foo('abc'));
print(foo('ab'));
