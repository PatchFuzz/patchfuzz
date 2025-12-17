var x = [];
function foo(x, p) {
  x[p] = 5.3;
}
foo(x, 1);
foo(x, 2);
foo(x, -1);
gc();
