





var foo = (function () {
  var y = 0;
  return function foo(x) {
    
    var a = new Float64Array(32);
    a[0] = 42;
    y = x + 0.1;  
    return a[0];
  }
})();

%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo(1);

for (var i = 0; i < 20; ++i) {
  %SetAllocationTimeout(i, i, false);
  assertEquals(42, foo(2));
}
