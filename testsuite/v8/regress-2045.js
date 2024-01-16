




























function foo() {
  assertEquals(2, arguments.length);
}

function bar() {
  G.x;
  return foo.apply(this, arguments);
}

function baz() {
  return bar(1, 2);
};
%PrepareFunctionForOptimization(baz);
G = {
  x: 0
};
baz();
baz();
%OptimizeFunctionOnNextCall(baz);
baz();
delete G.x;
baz();
