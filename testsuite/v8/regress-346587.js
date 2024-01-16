





function bar(obj) {
  assertTrue(obj.x === 'baz');
}

function foo() {
  bar({x: 'baz'});
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
