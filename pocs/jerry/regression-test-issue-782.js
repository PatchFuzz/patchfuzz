try
{
  String.prototype.search(RegExp.prototype);
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
}
