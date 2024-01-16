





function foo(x) {
  return x << x;
}
foo(1);
foo(2);

function bar(x) {
  foo(x);
};
%PrepareFunctionForOptimization(bar);
%OptimizeFunctionOnNextCall(bar);

assertThrows(() => bar(Symbol.toPrimitive));
