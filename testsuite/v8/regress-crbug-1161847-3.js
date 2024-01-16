





function bar(x) { delete x.bla; x.bla = 23 }

function foo() {
  let obj = {bla: 0};
  Object.defineProperty(obj, 'bla', {writable: false});
  bar(obj);
  return obj.bla;
}

%PrepareFunctionForOptimization(foo);
assertEquals(23, foo());
assertEquals(23, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(23, foo());
