var v = 0;
function foo() {
  for (var i = 0; i < 70000; i++) {
    v += i;
  }
  eval();
}
foo()
print(2449965000, v);
