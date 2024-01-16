













try
{
  eval ('var y = 4e;');
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}
