































var x = {};
function f() { return x.y; }


f();
f();


x = 23;


assertEquals(undefined, f());
