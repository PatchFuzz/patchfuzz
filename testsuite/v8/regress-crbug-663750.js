





var v = 0;
function foo(a) {
  v = a;
}
this.x = 0;
delete x;

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
assertEquals(undefined, v);

Object.freeze(this);

%PrepareFunctionForOptimization(foo);
foo(4);
foo(5);
%OptimizeFunctionOnNextCall(foo);
foo(6);
assertEquals(undefined, v);
