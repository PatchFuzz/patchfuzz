





























function f1(x) {
  var c = "fail";
  if (!x || g1()) {
    c = ~x;
  }
  return c;
}

function g1() { try { return 1; } finally {} }

%PrepareFunctionForOptimization(f1);
for (var i = 0; i < 5; i++) f1(42);
%OptimizeFunctionOnNextCall(f1);

print(-1, f1(0));
print(-43, f1(42));
print(-1, f1(""));

function f2(x) {
  var c = "fail";
  if (!x || !g2()) {
    c = ~x;
  }
  return c;
}

function g2() { try { return 0; } finally {} }

%PrepareFunctionForOptimization(f2);
for (var i = 0; i < 5; i++) f2(42);
%OptimizeFunctionOnNextCall(f2);

print(-1, f2(""));
