





function Data() {
}
Data.prototype = { x: 1 };

function TriggerDeopt() {
  Data.prototype = { x: 2 };
}

function TestDontSelfHealWithDeoptedCode(run_unoptimized, ClosureFactory) {
  
  
  var unoptimized_closure = ClosureFactory();
  if (run_unoptimized) {
    unoptimized_closure();
  }

  
  
  (() => {
    var optimized_closure = ClosureFactory();
    %PrepareFunctionForOptimization(optimized_closure);
    
    
    
    optimized_closure.call(undefined);
    %OptimizeFunctionOnNextCall(optimized_closure);
    optimized_closure.call(undefined);
  })();

  
  
  
  
  
  
  (() => {
    var dummy = function() { return 1; };
    %PrepareFunctionForOptimization(dummy);
    %OptimizeFunctionOnNextCall(dummy);
    dummy();
  })();

  
  
  gc(true);

  
  
  
  TriggerDeopt();

  
  
  
  unoptimized_closure();
}




TestDontSelfHealWithDeoptedCode(false,
        () => { return () => { return new Data() }});
TestDontSelfHealWithDeoptedCode(true,
        () => { return () => { return new Data() }});
