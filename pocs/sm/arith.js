function add(x, y)
{
  var z = x + y;
  print(z, 2147483732);
  print(z - 10, 2147483722);
}
add(0x7ffffff0, 100);

function mul(x, y)
{
  var z = x * y;
  print(z, 4294967264);
}
mul(0x7ffffff0, 2);

function div1(x, y)
{
  var z = x / y;
  print(z + 10, 20);
}
div1(100, 10);

function div2(x, y)
{
  var z = x / y;
  print(z + 10, 20.5);
}
div2(105, 10);

function uncopy(x, y)
{
  var q = x;
  x += y;
  q++;
  print(q, 2147483633);
  print(x, 2147483732);
}
uncopy(0x7ffffff0, 100);

function addmore(x, y)
{
  var q = (x + 10) + (x + y);
  print(q, 4294967374);
  x = q;
}
addmore(0x7ffffff0, 100);
