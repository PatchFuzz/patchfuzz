





{
  function f() {
    for(let i = 0; i < 10; ++i){
      %PrepareFunctionForOptimization(f);
      try{
        
        
        
        
        with(f&&g&&(s()=N)({...g})){}
      } catch {}
      %OptimizeOsr();
    }
  }
  %EnsureFeedbackVectorForFunction(f);
  f();
}
