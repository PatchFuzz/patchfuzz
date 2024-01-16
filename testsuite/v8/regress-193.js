































function f() {
  return eval("var x; constructor");
}


f()();



assertEquals(constructor, f());
