function empty() { }





function non_eager_inlined(bool) {
  if (bool) { empty(); empty(); empty(); }
}

function target() {
  
  
  
  empty();

  let tmp;
  try {
    throw tmp = non_eager_inlined();
  } catch (e) {
    
    return tmp;
  }
}

%PrepareFunctionForOptimization(empty);
%PrepareFunctionForOptimization(non_eager_inlined);
%PrepareFunctionForOptimization(target);
target();
%OptimizeFunctionOnNextCall(target);
target();
