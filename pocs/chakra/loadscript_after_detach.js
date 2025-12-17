var count = 0;
function foo() {
  count++;
  if (count == 3) {
    print("", "samethread"); 
  }
}
foo();
print(foo);
print(foo);
print(foo);
print("pass");
