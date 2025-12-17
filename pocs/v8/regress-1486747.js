const very_close_to_zero = 0.0000000000000000000001;
const huge_number = 10**307;

function test(b) {
  
  
  let a = b - very_close_to_zero;
  if(a < 0) return a / huge_number;
  return 42;
}

%PrepareFunctionForOptimization(test);
test(-50);
%OptimizeFunctionOnNextCall(test);
print(-0, test(-very_close_to_zero));
