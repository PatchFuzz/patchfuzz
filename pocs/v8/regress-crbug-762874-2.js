const maxLength = %StringMaxLength();
const s = 'A'.repeat(maxLength);

function foo(s) {
  let x = s.lastIndexOf("", maxLength);
  return x === maxLength;
};
%PrepareFunctionForOptimization(foo);
print(foo(s));
print(foo(s));
%OptimizeFunctionOnNextCall(foo);
print(foo(s));
