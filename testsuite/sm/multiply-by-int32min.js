function foo()
{
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for (var i = 0; i < 15; i = i + 1) {
    var y = (0x7fffffff + ((i & 1) * -2147483648)) + 5;
  }
  return y;
}
assertEq(foo(), (0x7fffffff + ((14 & 1) * -2147483648)) + 5);

function bar()
{
  
  
  
  
  
  
  
  
  
  
  for (var i = 0; i < 17; i = i + 1) {
    var y = (0 + ((-1 + (i & 1)) * -2147483648));
  }
  return y;
}
assertEq(bar(), (0 + ((-1 + (16 & 1)) * -2147483648)));
