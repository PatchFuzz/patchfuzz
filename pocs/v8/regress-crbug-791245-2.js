const s = new Set();

function foo(s) {
  const i = s[Symbol.iterator]();
  i.next();
  return i;
};
%PrepareFunctionForOptimization(foo);
console.log(foo(s));
console.log(foo(s));
%OptimizeFunctionOnNextCall(foo);
console.log(foo(s));
