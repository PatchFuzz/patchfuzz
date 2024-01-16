





function t1() {
  return this instanceof t1;
}
function t2() {
  return this instanceof t2;
}

var o1 = new function() {}();
Object.defineProperty(o1, 't', {
  get: function() {
    return this instanceof o1.constructor;
  }
});
var o2 = new function() {}();
Object.defineProperty(o2, 't', {
  get: function() {
    return this instanceof o1.constructor;
  }
});
var o3 = new function() {}();
o3.t = true;

function f(o) {
  return 1 + (o.t ? 1 : 2);
};
%PrepareFunctionForOptimization(f);
f(o1);
f(o1);
f(o2);
%OptimizeFunctionOnNextCall(f);
f(o3);
