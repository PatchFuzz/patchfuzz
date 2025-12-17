(function() { var a = 10; a++; })();

function opt_me() {
  deopt();
}

function deopt() {
  
  try { var a = 42; } catch(o) {};
  %DeoptimizeFunction(opt_me);
  gc();
}


opt_me();
