








var weak;


function makeFn() {
  var o = {};
  weak = new WeakRef(o);
  o.num = 0;
  return () => { return ++o.num; };
}


function g(f) {
  f();
}



(function () {
  var fn = makeFn();
  %PrepareFunctionForOptimization(g);
  %PrepareFunctionForOptimization(fn);
  g(fn);
  %OptimizeFunctionOnNextCall(g);
  g(fn);
})();


setTimeout(() => {
  
  
  gc();

  
  assertEquals(undefined, weak.deref());

  
  
  

  
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
      assertNotEquals(undefined, weak.deref());
    } else {
      assertEquals(undefined, weak.deref());
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
}, 0);
