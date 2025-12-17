function module() {
  "use asm";
  function f() {}
  return f;
}
d8.terminate();
module();
