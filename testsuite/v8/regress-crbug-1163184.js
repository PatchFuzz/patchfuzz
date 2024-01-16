





let arr = [20];


arr[Symbol.isConcatSpreadable] = true;

for (let i = 0; i < 4; ++i) {
  function tmp() {
    
    let c = arr.concat();
    
    c.x;
  };
  %PrepareFunctionForOptimization(tmp);
  tmp();
  
  
  if (i == 1) {
    %OptimizeFunctionOnNextCall(tmp);
    tmp();
  }
  
  if (i == 2) %SimulateNewspaceFull();
}
