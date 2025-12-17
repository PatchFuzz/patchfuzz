function foo()
{
  new foo();
}
try
{
  foo();
}catch(e)
{
  print(e);
}