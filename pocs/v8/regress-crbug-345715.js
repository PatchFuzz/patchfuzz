a = {
  y: 1.5
};
a.y = 0;
b = a.y;
c = {
  y: {}
};

function f() {
  return 1;
}

function g() {
  var e = {y: b};
  var d = {x: f()};
  var d = {x: f()};
  return [e, d];
};
%PrepareFunctionForOptimization(g);
g();
g();
%OptimizeFunctionOnNextCall(g);
print(1, g()[1].x);
