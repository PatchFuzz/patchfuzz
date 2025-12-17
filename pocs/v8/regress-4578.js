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
  
  
  
  
  
  
  (async function () {
    await gc({ type: 'major', execution: 'async' });

    
    print(undefined, weak.deref());
  })();
}, 0);
