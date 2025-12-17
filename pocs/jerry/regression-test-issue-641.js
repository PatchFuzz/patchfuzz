try
{
  Object.freeze(RegExp.prototype.compile)();
  assert(false);
}
catch (e)
{
  assert(e instanceof TypeError);
}
