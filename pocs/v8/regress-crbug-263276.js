var array1 = [];
array1.foo = true;

var array2 = [];
array2.bar = true;

function bad(array) {
  array[array.length] = 1;
};
%PrepareFunctionForOptimization(bad);
bad(array1);
bad(array1);
bad(array2);  
bad(array2);  
%OptimizeFunctionOnNextCall(bad);
bad(array2);  
print(3, array2.length);
