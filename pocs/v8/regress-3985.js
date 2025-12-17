var shouldThrow = false;

function h() {
  try {  
  } catch (e) {
  }
  var res = g.arguments[0].x;
  if (shouldThrow) {
    throw res;
  }
  return res;
}

function g(o) {
  h();
}

function f1() {
  var o = {x: 1};
  g(o);
  return o.x;
};
%PrepareFunctionForOptimization(f1);
function f2() {
  var o = {x: 2};
  g(o);
  return o.x;
};
%PrepareFunctionForOptimization(f2);
f1();
f2();
f1();
f2();
%OptimizeFunctionOnNextCall(f1);
%OptimizeFunctionOnNextCall(f2);
shouldThrow = true;
try {
  f1();
} catch (e) {
  print(e, 1);
}
try {
  f2();
} catch (e) {
  print(e, 2);
}
