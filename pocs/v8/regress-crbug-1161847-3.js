function bar(x) { delete x.bla; x.bla = 23 }

function foo() {
  let obj = {bla: 0};
  Object.defineProperty(obj, 'bla', {writable: false});
  bar(obj);
  return obj.bla;
}

%PrepareFunctionForOptimization(foo);
print(23, foo());
print(23, foo());
%OptimizeFunctionOnNextCall(foo);
print(23, foo());
