function test4() {
  with ({ x: 1 % {}}) 
  {
    for (var i = 0; i < 1; i++) {
      x;
    }
  }
}
test4();
test4();
print("PASS");
