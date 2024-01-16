





const maxLength = %StringMaxLength();
const s = 'A'.repeat(maxLength);

function foo(s) {
  let x = s.indexOf("", maxLength);
  return x === maxLength;
};
%PrepareFunctionForOptimization(foo);
assertTrue(foo(s));
assertTrue(foo(s));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(s));
