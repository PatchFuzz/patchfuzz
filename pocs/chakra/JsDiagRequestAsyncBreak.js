var count = 0;
while (count++ < 5) {
  if (count == 3) {
    print();
  }
}

function foo() {
  var x = 1;
  x = 2; 
}
foo();

print("pass");
