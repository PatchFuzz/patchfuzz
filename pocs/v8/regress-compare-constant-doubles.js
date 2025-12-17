var left = 1.5;
var right;

var keepalive;

function foo() {
  
  var a1 = Math.sin(1) + 10;
  var a2 = a1 + 1;
  var a3 = a2 + 1;
  var a4 = a3 + 1;
  var a5 = a4 + 1;
  var a6 = a5 + 1;
  keepalive = [a1, a2, a3, a4, a5, a6];

  
  if (left < right) return "ok";
  return "bad";
}

function prepare(base) {
  right = 0.5 * base;
}

%PrepareFunctionForOptimization(foo);
prepare(21);
print("ok", foo());
print("ok", foo());
%OptimizeFunctionOnNextCall(foo);
print("ok", foo());
