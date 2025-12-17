Object.prototype.__noSuchMethod__ = {};

try
{
  var [x] = 1;
  throw new Error("didn't throw");
}
catch (e)
{
  print(e instanceof TypeError, true,
           "expected TypeError, got " + e);
}
