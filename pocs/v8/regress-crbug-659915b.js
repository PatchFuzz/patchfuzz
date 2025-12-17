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
print(24, boom());
print(25, boom());
print(26, boom());
%OptimizeFunctionOnNextCall(boom);
print(27, boom());
})();
