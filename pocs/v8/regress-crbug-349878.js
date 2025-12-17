function f(a, b) {
  a == b;
}

f({}, {});

var a = { y: 1.5 };
a.y = 777;
var b = a.y;

function h() {
  var d = 1;
  var e = 777;
  while (d-- > 0) e++;
  f(1, e);
}

var global;
function g() {
  global = b;
  return h(b);
}

%PrepareFunctionForOptimization(g);
g();
g();
%OptimizeFunctionOnNextCall(g);
g();
