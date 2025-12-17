var weak;


function makeFn() {
  var o = {};
  weak = new WeakRef(o);
  o.num = 0;
  return () => { return ++o.num; };
}






function h(f) {
  gcAndCheckState();  
  f();  
}

var doCheck = false;
function gcAndCheckState() {
  if (!doCheck) return;

  
  
  var optimized = isOptimized(h);

  gc();

  
  
  
  if (optimized) {
    print(undefined, weak.deref());
  } else {
    
    
    
  }
}



%NeverOptimizeFunction(gcAndCheckState);



(function () {
  var fn = makeFn();
  %PrepareFunctionForOptimization(h);
  %PrepareFunctionForOptimization(fn);
  h(fn);
  %OptimizeFunctionOnNextCall(h);
  h(fn);
})();


setTimeout(() => {
  doCheck = true;
  h(() => {});
}, 0);
