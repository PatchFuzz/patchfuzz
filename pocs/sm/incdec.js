function local()
{
  var j = 0x7ffffff0;
  for (var i = 0; i < 100; i++)
    j++;
  print(j, 2147483732);
}
local();

function olocal()
{
  var j = 0x7ffffff0;
  for (var i = 0; i < 100; i++) {
    if (j++ == 5000)
      break;
  }
  print(j, 2147483732);
}
olocal();

function arg(j)
{
  for (var i = 0; i < 100; i++)
    j++;
  print(j, 2147483732);
}
arg(0x7ffffff0);

function oarg(j)
{
  for (var i = 0; i < 100; i++) {
    if (j++ == 5000)
      break;
  }
  print(j, 2147483732);
}
oarg(0x7ffffff0);


var x = 1.23;
x = x--;
x = x++;
x = ++x;
x = --x;
print(x, 1.23);

var g = 0x7ffffff0;
function glob()
{
  for (var i = 0; i < 100; i++)
    g++;
  print(g, 2147483732);
}
glob();

function gname()
{
  n = 0x7ffffff0;
  for (var i = 0; i < 100; i++)
    n++;
  print(n, 2147483732);
}
gname();

function prop()
{
  var v = {f: 0x7ffffff0};
  for (var i = 0; i < 100; i++)
    v.f++;
  print(v.f, 2147483732);
}
prop();

function elem(v, f)
{
  for (var i = 0; i < 100; i++)
    v[f]++;
  print(v.f, 2147483732);
}
elem({f: 0x7ffffff0}, "f");

function name()
{
  var v = 0x7ffffff0;
  var i;
  eval("for (i = 0; i < 100; i++) v++");
  print(v + 10, 2147483742);
}
name();
