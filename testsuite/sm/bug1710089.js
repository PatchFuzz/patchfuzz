

var iters = 250;




















var src = "return top_level_var + x0; "

for (var i = 0; i < iters; i++) {
  var def = "var x" + i + " = x" + (i+1) + "; ";
  src = "function f" + i + "() { " + def + src + "} return f" + i + "();"
}
src = "var x" + iters + " = 0;" + src;
src = "var top_level_var = 42; " + src;

var outer = Function(src);
for (var i = 0; i < 2; i++) {
  assertEq(outer(), 42);
}
