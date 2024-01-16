






function f(x) 
{ 
  if (x < 0) {
    throw Error("abc");
  } else {
    f(x-1);
  }
}

try 
{
   f(1);
} catch (ex) 
{
  var stackAfterTrimDirectoryName = ex.stack.replace(/\(.*\\/g, "(");
  WScript.Echo(stackAfterTrimDirectoryName);
}
