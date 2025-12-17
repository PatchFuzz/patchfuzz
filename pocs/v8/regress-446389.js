function runNearStackLimit(f) { function t() { try { t(); } catch(e) { f(); } }; try { t(); } catch(e) {} }
%PrepareFunctionForOptimization(__f_3);
%OptimizeFunctionOnNextCall(__f_3);
function __f_3() {
    var __v_5 = a[0];
}
runNearStackLimit(function() { __f_3(); });
