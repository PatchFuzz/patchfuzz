var g;
function noneager() {
  if (g()) fail(x);
  if (x) {}
};

function greedy() {
  noneager();
}

function foo() {
  try {
    greedy();
  } catch (e) {}
}

%PrepareFunctionForOptimization(noneager);
%PrepareFunctionForOptimization(greedy);
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeMaglevOnNextCall(foo);
foo();
