function bar(obj) {
  print(obj.x === 'baz');
}

function foo() {
  bar({x: 'baz'});
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
