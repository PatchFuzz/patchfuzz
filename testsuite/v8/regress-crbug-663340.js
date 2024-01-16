





var expected = undefined;

function foo() {
  var a = [0, , {}];
  a.shift();
  assertEquals(expected, a[0]);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

expected = 42;
Array.prototype[0] = 153;
Array.prototype[1] = expected;
foo();

function bar() {
  var a = [0, , {}];
  a.shift();
  assertEquals(expected, a[0]);
};
%PrepareFunctionForOptimization(bar);
bar();
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
