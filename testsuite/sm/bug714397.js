

function g()
{
  return 0;
}

function f()
{
  for(var i = 0; i < 100; i++) {
    g(0);
    g(0);
  }
}


f();
