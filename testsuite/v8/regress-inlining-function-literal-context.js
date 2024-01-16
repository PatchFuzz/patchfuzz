




























function mkbaz(x) {
  function baz() {
    return function() {
      return [x];
    };
  }
  return baz;
}

var baz = mkbaz(1);

function foo() {
  var f = baz();
  return f();
}


;
%PrepareFunctionForOptimization(foo);
gc();
gc();

assertArrayEquals([1], foo());
assertArrayEquals([1], foo());
%OptimizeFunctionOnNextCall(foo);
assertArrayEquals([1], foo());
