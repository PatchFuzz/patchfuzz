function f() { return this.x; }


f();
f();


this.x = 23;


print(23, f());





this.__proto__ = null;
function g() { return this.y; }


g();
g();


this.y = 42;


print(42, g());
