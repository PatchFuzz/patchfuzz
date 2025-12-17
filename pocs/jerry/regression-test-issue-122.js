try
{
  print({toString: function() { throw new TypeError("foo"); }}, []);
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
  assert (e.message === "foo");
}
