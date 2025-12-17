var a = [0, 0, 0, 1];
var b = [0, 0, 0, "one"];
var c = [0, 0, 0, 1];
c.foo = "baz";

function foo(array) {
  array.foo = "bar";
}

print(%HasSmiElements(a));
print(%HasObjectElements(b));

foo(a);
foo(b);

print(%HasSmiElements(a));
print(%HasObjectElements(b));
