





function bar() {
  arr = new Array(4);
  iter = arr[Symbol.iterator];
  return iter;
}

function foo(a) {
  iter = bar();
  return iter.isPrototypeOf(iter);
}

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
