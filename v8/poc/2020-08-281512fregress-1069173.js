





function foo() {
  "use asm";
  const v = -0;
  function bar() {
    return v;
  }
  return { d: bar };
}

var m = foo();
print(-Infinity, 1 / m.d());
print(%IsAsmWasmCode(foo));
