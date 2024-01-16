





function get_template_object(x) {
  return x;
}
function foo() {
  return get_template_object``;
}
function bar() {
  return get_template_object``;
}
foo();
gc();
var cached_bar = bar();
assertNotSame(foo() === cached_bar);
assertSame(bar(), cached_bar);
