function Foo() {}
var x = new Foo();
Foo.prototype = 1;
function foo() { return x instanceof Foo; }
print(foo, TypeError);
