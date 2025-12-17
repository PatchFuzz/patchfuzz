var X = 'x';
function C() { this[X] = 42; }
var a = new C();
var b = new C();
print(42, a.x);
print(42, b.x);
