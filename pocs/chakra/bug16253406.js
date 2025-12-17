function AsmModule(stdlib) {
  'use asm';
  var fr = stdlib.fround;
  function f3(x) {
    x = fr();
  }
}
print("pass");
