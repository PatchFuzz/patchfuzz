




var notCallable;
function inferReceiverMapsInDeadCode() {
  var obj = { func() {} };
  gc();
  function wrappedCode() { try { code(); } catch (e) {} }
  %PrepareFunctionForOptimization(wrappedCode);
  function code() {
    obj.a;
    try {
      Object.defineProperty(obj, "func", { get() {} });
    } catch (neverCaught) {}
    for (var i = 0; i < 1; i++) {
      try {
        notCallable(arguments[i]);
      } catch (alwaysCaught) {}
    }
  }
  wrappedCode();
  try {
    %OptimizeFunctionOnNextCall(wrappedCode);
    wrappedCode();
  } catch (e) {}
}
inferReceiverMapsInDeadCode();
inferReceiverMapsInDeadCode();
inferReceiverMapsInDeadCode();
