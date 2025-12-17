(function TestDematerializedContextInBuiltin() {
  var f = function() {
    var b = [1,2,3];
    var callback = function(v,i,o) {
      %_DeoptimizeNow();
    };
    try { throw 0 } catch(e) {
      return b.forEach(callback);
    }
  };
  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();
