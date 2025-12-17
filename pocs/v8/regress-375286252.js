function Module() {
  "use asm";
  function f() {}
  return { f: f };
}

Module();
