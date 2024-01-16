




function foo()
{
  new foo();
}
try
{
  foo();
}catch(e)
{
  WScript.Echo(e);
}