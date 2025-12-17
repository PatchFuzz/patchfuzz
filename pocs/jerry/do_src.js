function f() {
  print("F1");
}

f();
eval("f = function f() {\nprint('F2') }");
f();
