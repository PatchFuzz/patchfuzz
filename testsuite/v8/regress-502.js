































var X = 'x';
function C() { this[X] = 42; }
var a = new C();
var b = new C();
assertEquals(42, a.x);
assertEquals(42, b.x);
