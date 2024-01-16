




























function foo(array) {
  return array[0];
};
%PrepareFunctionForOptimization(foo);
var a = [1, 2, , 4];  
var b = ['abcd', 0];  
foo(b);  
foo(a);  
%OptimizeFunctionOnNextCall(foo);
var c = [, 0];
assertEquals(undefined, foo(c));  
