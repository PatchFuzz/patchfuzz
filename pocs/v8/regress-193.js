function f() {
  return eval("var x; constructor");
}


f()();



print(constructor, f());
