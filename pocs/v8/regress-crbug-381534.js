var obj = {};

function f(v) {
  var v1 = -(4 / 3);
  var v2 = 1;
  var arr = new Array(
      +0, true, 0, -0, false, undefined, null, '0', obj, v1, -(4 / 3),
      -1.3333333333333, 'str', v2, 1, false);
  print(10, arr.lastIndexOf(-(4 / 3)));
  print(9, arr.indexOf(-(4 / 3)));

  print(10, arr.lastIndexOf(v));
  print(9, arr.indexOf(v));

  print(8, arr.lastIndexOf(obj));
  print(8, arr.indexOf(obj));
};
%PrepareFunctionForOptimization(f);
function g(v, x, index) {
  var arr = new Array({}, x - 1.1, x - 2, x - 3.1);
  print(index, arr.indexOf(0));
  print(index, arr.lastIndexOf(0));

  print(index, arr.indexOf(v));
  print(index, arr.lastIndexOf(v));
};
%PrepareFunctionForOptimization(g);
f(-(4 / 3));
f(-(4 / 3));
%OptimizeFunctionOnNextCall(f);
f(-(4 / 3));

g(0, 2, 2);
g(0, 3.1, 3);
%OptimizeFunctionOnNextCall(g);
g(0, 1.1, 1);
