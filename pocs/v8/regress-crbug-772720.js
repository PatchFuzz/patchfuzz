var global;
function f() {
  var local = 'abcdefghijklmnopqrst';
  local += 'abcdefghijkl' + (0 + global);
  global += 'abcdefghijkl';
}
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
