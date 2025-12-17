function fct() {
  var obj = {};
  obj.length = (new Uint8ClampedArray().length);
}

%PrepareFunctionForOptimization(fct);
fct();
%OptimizeFunctionOnNextCall(fct);
fct();
