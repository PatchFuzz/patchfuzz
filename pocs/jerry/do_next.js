print("next test");

function test()
{
  function f()
  {
    return 0;
  }

  print("Func");
  return f;
}

var f = test(),
    g,
    h = f();

{
  let a = test(),
      b,
      c = a();
}


eval("(function () {} `a`)")
gc();

f();
