





var v1 = {};
function g() {
  v1 = [];
  for (var i = 0; i < 1; i++) {
    v1[i]();
  }
}

var v2 = {};
var v3 = {};
function f() {
  v3 = v2;
  g();
};
%PrepareFunctionForOptimization(f);
assertThrows(g);
%OptimizeFunctionOnNextCall(f);
assertThrows(f);
