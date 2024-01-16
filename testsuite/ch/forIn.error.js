






function foo()
{
    for (var p in c)    
    {
        addPropertyName(p);
    }
}

try
{
  foo();
}
catch (ex)
{
  var truncatedPathStack = ex.stack.replace(/\(.*\\/g, "(");
  WScript.Echo(truncatedPathStack);
}
