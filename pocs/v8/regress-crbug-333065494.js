function foo(__v_56, v) {
  var bla = {
    x: v,
    __proto__: __v_56
  };
  bla.x;
}
%PrepareFunctionForOptimization(foo);
(function() {
  foo(arguments, 0);
})();
(function() {
  foo(arguments, 0);
  
  foo(arguments, NaN);
})();

%OptimizeFunctionOnNextCall(foo);
foo();
