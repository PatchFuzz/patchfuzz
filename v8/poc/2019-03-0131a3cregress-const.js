





























function f() {
  var x = 42;
  while (true) {
    const y = x;
    if (--x == 0) return y;
  }
}

function g() {
  const x = 42;
  return x;
}

%PrepareFunctionForOptimization(f);
for (var i = 0; i < 5; i++) {
  f();
}
%OptimizeFunctionOnNextCall(f);

print(1, f());

%PrepareFunctionForOptimization(g);
for (var i = 0; i < 5; i++) {
  g();
}
%OptimizeFunctionOnNextCall(g);

print(42, g());


function h(a, b) {
  var r = a + b;
  const X = 42;
  return r + X;
}

%PrepareFunctionForOptimization(h);

for (var i = 0; i < 5; i++) h(1,2);

%OptimizeFunctionOnNextCall(h);

print(45, h(1,2));
print("foo742", h("foo", 7));
