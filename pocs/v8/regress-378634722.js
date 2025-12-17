let val = 42; 
function foo(v) { val = v; }
foo(4.2); 
foo(0.0); 
foo(-0.0); 
print(-0.0, val);
