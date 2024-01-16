




























var a = {
  compare_null: function(x) {
    return null != x;
  },
  kaboom: function() {}
};

function crash(x) {
  var b = a;
  b.compare_null(x) && b.kaboom();
  return "ok";
};
%PrepareFunctionForOptimization(crash);
assertEquals("ok", crash(null));
assertEquals("ok", crash(null));
%OptimizeFunctionOnNextCall(crash);

assertEquals("ok", crash(1));
