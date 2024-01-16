




(function() {
function foo(x) {
  const i = x > 0;
  const dv = new DataView(ab);
  return dv.getUint16(i);
};
%PrepareFunctionForOptimization(foo);
const ab = new ArrayBuffer(2);
foo(0);
foo(0);
%OptimizeFunctionOnNextCall(foo);
foo(0);
})();
