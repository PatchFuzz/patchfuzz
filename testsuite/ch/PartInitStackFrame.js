









function createFoo()
{
  var foo = function(another)
  {
    if (another) another();
  }
  return foo;
}

try
{
  var foo1 = createFoo();
  var foo2 = createFoo();
  foo1(foo2);
}
catch (ex)
{
  var stackAfterTrimDirectoryName = ex.stack.replace(/\(.*\\/g, "(");
  WScript.Echo(stackAfterTrimDirectoryName);
}
