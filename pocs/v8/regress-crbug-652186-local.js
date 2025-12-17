function f() {
  var x = 1;
  return eval("eval('var x = 2'); x;");
}
f();
f();
