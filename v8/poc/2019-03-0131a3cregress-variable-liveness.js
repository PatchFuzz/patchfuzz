





function foo(x) {
  %DeoptimizeFunction(run);
  return x;
}

function run() {
  var line = new Array(2);
  for (var n = 3; n > 0; n = n - 1) {
    if (n < foo(line.length)) line = new Array(n);
    line[0] = n;
  }
}

%PrepareFunctionForOptimization(run);
print(void 0, run());
%OptimizeFunctionOnNextCall(run);
print(void 0, run());
