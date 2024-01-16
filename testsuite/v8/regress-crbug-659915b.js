





(function() {
var x = 23;
function f() {
  return x;
}
function g() {
  [x] = [x + 1];
}
function h() {
  g();
  return x;
}

function boom() {
  return h();
};
%PrepareFunctionForOptimization(boom);
assertEquals(24, boom());
assertEquals(25, boom());
assertEquals(26, boom());
%OptimizeFunctionOnNextCall(boom);
assertEquals(27, boom());
})();
