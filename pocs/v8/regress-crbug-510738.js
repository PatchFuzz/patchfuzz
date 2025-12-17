function check(f, result) {
  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  print(result, f());
}

var x = 17;
function generic_load() { return x; }
check(generic_load, 17);

function generic_store() { x = 13; return x; }
check(generic_store, 13);
