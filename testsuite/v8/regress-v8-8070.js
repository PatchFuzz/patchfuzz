





function bar(iterator) {
  for (const entry of iterator) {}
}

%NeverOptimizeFunction(bar);

function foo(a) {
  const iterator = a.values();
  bar(iterator);
  return iterator.next().done;
}

const a = [1, 2, 3];
%PrepareFunctionForOptimization(foo);
assertTrue(foo(a));
assertTrue(foo(a));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(a));
