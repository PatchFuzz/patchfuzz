













a: for (var i = 0; i < 10; i++)
{
  function f ()
  {
    for (var j = 0; n < 10; j++)
    {
      break a;
    }
  }

  f ();
}
