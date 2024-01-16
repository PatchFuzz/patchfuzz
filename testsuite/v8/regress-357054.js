



[].__defineSetter__(0, function() { });
function f(a,i,v) { a[i] = v; }
a = [0,0,0];
f(a,0,5);
a = new Float32Array(5);
f(a,2,5.5);
