var a = Array(10).fill();
function foo() {
  for (var k = 0; k < a.length; ++k) {
    if (k == 0) {
      k += 1;
    }
    a[k];
  }
}
foo();
print("passed");
