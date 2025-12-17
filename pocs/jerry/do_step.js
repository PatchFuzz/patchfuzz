function f1()
{
  function g()
  {
    return 6;
  }

  var i = g();
  g();
}

function f2()
{
  f1();
  return 7;
}

f1();
f2();
