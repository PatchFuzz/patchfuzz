function bar(a) {
  function in_bar(a, b) {
    a % b; 
    return a;
  }
  %PrepareFunctionForOptimization(in_bar);
  in_bar({});
  if (a) {
    throw_before_this_function_is_not_defined();
  }
}

function foo() {
  try {
    function const_42() {
      return 42;
    }
    %PrepareFunctionForOptimization(const_42);
    const_42();
    bar(true);
  } catch {
  }
}

%PrepareFunctionForOptimization(bar);
%PrepareFunctionForOptimization(foo);
foo();

%OptimizeMaglevOnNextCall(foo);
foo();
