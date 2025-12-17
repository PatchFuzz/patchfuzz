function f() {
  moduleLink(parseModule("[]", "", "json"));
  Math.valueOf = f;
  Math.pow(Math);
}
f();

