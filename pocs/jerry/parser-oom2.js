var str = "'\\t' +'\\t' +'\\t'+'\\t'+'\\t'+'\\t'+";

for (var i = 0; i < 10; i++) {
  str = str + str;
}

str = "(function() { return " + str + "1 })";


var array = [];

try
{
  for (var i = 0; i < 90; i++)
  {
    array[i] = eval(str);
  }
  assert (false);
}
catch (err)
{
  array = null;
  assert (err === null);
}
