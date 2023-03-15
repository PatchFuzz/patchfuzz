





const array = [42, 2.1];  
let b = false;

function f() {
  if (b) array[100000] = 4.2;  
  return 42;
};
%NeverOptimizeFunction(f);

function includes() {
  return array.includes(f());
};
%PrepareFunctionForOptimization(includes);
print(includes());
print(includes());
%OptimizeFunctionOnNextCall(includes);
print(includes());
b = true;
print(includes());
