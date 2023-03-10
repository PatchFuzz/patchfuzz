





var a = 42;

function g(n) {
  while (n > 0) {
    a = new Array(n);
    n--;
  }
}

g(1);

function f() {
  g();
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
print(1, a.length);
