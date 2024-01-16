































function f(a) {  
  var s = '';    
  var n = 0;
  var i = 1;
  n = i + a;
}

%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
f(1);
assertOptimized(f);


function g() {  
  var s = '';   
  var n = 0;
  var i = 1;
  n = i + this;
}

%PrepareFunctionForOptimization(g);
g.call(1);
g.call(1);
%OptimizeFunctionOnNextCall(g);
g.call(1);
assertOptimized(g);
