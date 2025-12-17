function f() {}
function g() {}
function h() {}

function test(n) {
  h;
  (n == 0 ? f : (n > 0 ? g : h))();
}

%EnsureFeedbackVectorForFunction(f);
%EnsureFeedbackVectorForFunction(g);

%PrepareFunctionForOptimization(test);
test(0);
test(1);
%OptimizeFunctionOnNextCall(test);
test(0);
