































var a = [0, 0, 0, 1];
var b = [0, 0, 0, "one"];
var c = [0, 0, 0, 1];
c.foo = "baz";

function foo(array) {
  array.foo = "bar";
}

assertTrue(%HasSmiElements(a));
assertTrue(%HasObjectElements(b));

foo(a);
foo(b);

assertTrue(%HasSmiElements(a));
assertTrue(%HasObjectElements(b));
