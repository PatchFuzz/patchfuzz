function test0() {
  var func2 = function() {};
  var c = 2147483647;
  while (func2.call(c++, c++)) {}
}
test0();
test0();
print("pass");
