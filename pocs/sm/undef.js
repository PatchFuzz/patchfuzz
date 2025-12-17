function local()
{
  var x;
  x++;
  print(x, NaN);
  x = 0;
}
local();

function name(v)
{
  var x;
  with (v) {
    x++;
    print(x, NaN);
  }
  print(x, NaN);
  x = 0;
}
name({});

function letname(v)
{
  if (v) {
    let x;
    with (v) {
      x = "twelve";
    }
    print(x, "twelve");
  }
}
letname({});

function upvar()
{
  var x;
  function inner() {
    x++;
    print(x, NaN);
  }
  inner();
}
upvar();

var x;
var y;

function global()
{
  x++;
  print(x, NaN);
  var z = 2 + y;
  print(z, NaN);
}
global();

x = 0;
y = 0;
