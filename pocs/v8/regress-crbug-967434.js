function f1(h_also_eval) {
  this.x = h_also_eval;
}

function f2(h, h_eval) {
  var o = new f1(h());
  
  
  
  
  
  
  o.x = h_eval;
};
function f3(h) {
  %PrepareFunctionForOptimization(f2);
  f2(h, h());
  %OptimizeFunctionOnNextCall(f2);
  f2(h, h());
}

function g1() {
  return {};
};
function g2() {
  return 4.2;
};

f3(g1);
f3(g2);

f3(g1);
f1.prototype = {};
f3(g2);
