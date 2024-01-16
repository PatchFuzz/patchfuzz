




























var large_int = 0x40000000;

function foo(x, expected) {
  assertEquals(expected, x);  
  x += 0;                     
  
  if (3 != x) {
    x += 0;  
    
    assertEquals(expected, x);
  }
};
%PrepareFunctionForOptimization(foo);
foo(1, 1);
foo(3, 3);
%OptimizeFunctionOnNextCall(foo);
foo(large_int, large_int);
