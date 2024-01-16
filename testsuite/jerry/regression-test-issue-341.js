













try
{
  eval ('\xbf\x0a\x0a');
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}
