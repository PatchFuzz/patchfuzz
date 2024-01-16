



function foo() {}
foo.prototype = 1;
v = new foo();
function bar() { return v instanceof foo; }
assertThrows(bar);
