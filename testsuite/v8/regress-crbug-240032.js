





























function mk() {
  return function() {};
}
assertInstanceof(mk(), Function);
assertInstanceof(mk(), Function);


var o = {};
o.func = mk();


function cmp(o, f) {
  return f === o.func;
};
%PrepareFunctionForOptimization(cmp);
assertTrue(cmp(o, o.func));
assertTrue(cmp(o, o.func));
%OptimizeFunctionOnNextCall(cmp);
assertTrue(cmp(o, o.func));
