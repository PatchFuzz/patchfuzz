





var test = function() {
  var t = Date.now();  
  var o = {['p']: 1, t};
};

function caller() {
  test();
};
%PrepareFunctionForOptimization(caller);
caller();
caller();
%OptimizeFunctionOnNextCall(caller);
caller();
