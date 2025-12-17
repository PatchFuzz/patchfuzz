function Bar() { }
function Baz() { }
Baz.prototype = { __proto__: new Bar() }
var x = new Baz();
function foo(y) { return y instanceof Bar; }
print(foo(x));
Baz.prototype.__proto__ = null;
print(foo(x));
