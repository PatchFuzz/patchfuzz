































function f() { return this.x; }


f();
f();


this.x = 23;


assertEquals(23, f());





this.__proto__ = null;
function g() { return this.y; }


g();
g();


this.y = 42;


assertEquals(42, g());
