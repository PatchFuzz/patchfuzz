



function Foo() {}
var x = new Foo();
Foo.prototype = 1;
function foo() { return x instanceof Foo; }
assertThrows(foo, TypeError);
