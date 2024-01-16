





var x = 1;

var foo = (function() {
  "use asm";
  var o = this;
  return function() { o.x = null; }
})();

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();
