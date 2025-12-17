function test() {
  var i, result = "";
  var value = parseFloat(5.5);
  value = Math.abs(1025);
  for(i = 12; --i; result = ( value % 2 ) + result, value >>= 1);
  return result;
};

print("10000000001", test());
