function test1(x) {
  return (x*((2<<23)-1))|0
}
function test2(x) {
  return (x*((2<<22)-1))|0
}
function test3(x) {
  return (x*((2<<21)-1))|0
}
function test4(x) {
  var b = x + x + 3
  return (b*b) | 0
}

var x = 0x7ffffffe;
print(test1(x), 2113929216);
print(test2(x), 2130706434);
print(test3(x), 2139095042);
print(test4(x), 0);
