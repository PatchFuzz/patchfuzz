function f(a) { return arguments; }
var a = f(1,2,3);
delete a[1];
Array.prototype.sort.apply(a);
a[10000000] = 4;
Array.prototype.sort.apply(a);
