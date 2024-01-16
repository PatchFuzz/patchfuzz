














var str = "1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+";

for (var i = 0; i < 10; i++) {
  str = str + str;
}

str = "(function() { return " + str + "1 })";


var array = [];

try
{
  for (var i = 0; i < 30; i++)
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
