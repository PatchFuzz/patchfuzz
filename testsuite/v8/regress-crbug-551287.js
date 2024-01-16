





function f() {
  do {
  } while (true);
}

function boom(x) {
  switch (x) {
    case 1:
    case f():
      return;
  }
};
%PrepareFunctionForOptimization(boom);
%OptimizeFunctionOnNextCall(boom);
boom(1);
