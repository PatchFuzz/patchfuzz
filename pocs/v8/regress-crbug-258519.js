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
print("ok", crash(null));
print("ok", crash(null));
%OptimizeFunctionOnNextCall(crash);

print("ok", crash(1));
