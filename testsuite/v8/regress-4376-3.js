



function Foo() {}
var x = new Foo();
function foo() { return x instanceof Foo; }
assertTrue(foo());
Foo.prototype = 1;
assertThrows(foo, TypeError);
