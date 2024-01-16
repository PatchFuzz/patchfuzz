

































(function() { var a = 10; a++; })();

function opt_me() {
  deopt();
}


%NeverOptimizeFunction(deopt);
function deopt() {
  %DeoptimizeFunction(opt_me);
  gc();
}


opt_me();
