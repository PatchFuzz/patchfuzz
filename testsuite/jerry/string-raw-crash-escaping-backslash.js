



try
{
  var s = 'print(String.raw`\\`)\n
  eval (s)
  asserts(false)
}
catch (error)
{
}
