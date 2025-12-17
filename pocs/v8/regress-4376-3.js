function Foo() {}
var x = new Foo();
function foo() { return x instanceof Foo; }
print(foo());
Foo.prototype = 1;
print(foo, TypeError);
