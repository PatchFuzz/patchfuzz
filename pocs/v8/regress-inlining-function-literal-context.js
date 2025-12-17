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

print([1], foo());
print([1], foo());
%OptimizeFunctionOnNextCall(foo);
print([1], foo());
