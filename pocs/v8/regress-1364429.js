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
print(foo() === cached_bar);
print(bar(), cached_bar);
