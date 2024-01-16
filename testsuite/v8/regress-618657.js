



function* foo() { yield 42 }
function* goo() { yield 42 }
var f = foo();
var g = goo();
assertEquals(42, f.next().value);
assertEquals(42, g.next().value);
assertEquals(true, f.next().done);
assertEquals(true, g.next().done);
