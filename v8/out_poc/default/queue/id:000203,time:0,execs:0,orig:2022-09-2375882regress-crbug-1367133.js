






(function TestArray() {
  function doCall(a, method, ...args) { a[method](); }
  function callOnArray(a) { doCall(a, 'with'); a.keys(); }

  %PrepareFunctionForOptimization(callOnArray);
  callOnArray([1]);
  doCall({}, 'valueOf', "foo");
  %OptimizeFunctionOnNextCall(callOnArray);
  callOnArray([{},]);
})();

(function TestTypedArray() {
  function doCall(a, method, ...args) { a[method](); }
  function callOnArray(a) { doCall(a, 'with'); a.keys(); }

  %PrepareFunctionForOptimization(callOnArray);
  callOnArray(new Uint8Array(32));
  doCall({}, 'valueOf', "foo");
  %OptimizeFunctionOnNextCall(callOnArray);
  callOnArray(new Float64Array(8));
})();
