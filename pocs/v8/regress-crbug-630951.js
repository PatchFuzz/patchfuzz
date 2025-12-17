function foo() {
  "use asm";
  var o = new Int32Array(64 * 1024);
  return () => { o[i1 >> 2] | 0; }
}
print(foo());
