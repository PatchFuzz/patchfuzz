





var s_uninternalized = "concurrent" + "-skip-finalization";
%InternalizeString(s_uninternalized);

function foo() {}



%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo, s_uninternalized)
