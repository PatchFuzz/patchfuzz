





function* gen() {};
%PrepareFunctionForOptimization(gen);
(function warmup() {
  for (var i = 0; i < 100; ++i) {
    var g = gen();
    g.p = 42;
  }
})();

gc();   
gen();  
%OptimizeFunctionOnNextCall(gen);
gen();  
