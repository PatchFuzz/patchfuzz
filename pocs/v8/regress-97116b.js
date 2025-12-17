%NeverOptimizeFunction(deopt);
function deopt() {
  %DeoptimizeFunction(outer);
  for (var i = 0; i < 10; i++) gc();  
}

function outer(should_deopt) {
  inner(should_deopt);
};
%PrepareFunctionForOptimization(outer);
function inner(should_deopt) {
  if (should_deopt) deopt();
}

outer(false);
outer(false);
%OptimizeFunctionOnNextCall(outer);
outer(true);
