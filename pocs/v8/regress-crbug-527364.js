function module() {
  "use asm";
  var abs = Math.abs;
  function f() {
    return +abs();
  }
  return { f:f };
}

function run_close_to_stack_limit(f) {
  try {
    run_close_to_stack_limit(f);
    f();
  } catch(e) {
  }
}

var boom = module().f;
%PrepareFunctionForOptimization(boom);
%OptimizeFunctionOnNextCall(boom)
run_close_to_stack_limit(boom);
