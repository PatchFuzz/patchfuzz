function test(x) {
  let right = 5.0 + 10**308;
  right = Math.min(right, x%x+right);
  right = Math.max(1, right); 

  let left = 5.0;
  left = Math.min(left, x%x+left);
  left = Math.min(left-1, left);
  
  left = 4.0 - left;
  left = left - 2.00084e-18; 
  result = left / right; 
  return result;
}

%PrepareFunctionForOptimization(test);
test(true);
%OptimizeFunctionOnNextCall(test);
print(-0, test(true));
