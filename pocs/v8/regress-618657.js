function* foo() { yield 42 }
function* goo() { yield 42 }
var f = foo();
var g = goo();
print(42, f.next().value);
print(42, g.next().value);
print(true, f.next().done);
print(true, g.next().done);
