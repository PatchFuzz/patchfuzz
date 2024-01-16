





var str="if (1) do WScript.Echo(1); while (false); else 1;";

try
{
    eval(str);
}
catch (e)
{
    WScript.Echo(e);
}


str="do do WScript.Echo(2); while (false); while(false);"
try
{
    eval(str);
}
catch (e)
{
    WScript.Echo(e);
}



var a = 10;
do
  WScript.Echo(3)
while (false)
var b=20;

with(a) do WScript.Echo(4); while (false)

for(var i=0; i<5; i++)
  do
    WScript.Echo("5."+i);
  while(false)


do
  WScript.Echo(6)
while (false)
