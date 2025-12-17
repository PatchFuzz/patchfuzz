let x;
function foo() {
  for (var i = 0x7fff0000; i < 0x80000000; i++) {
    x = 42 + i - i;
  }
}
foo();
print(42, x)
