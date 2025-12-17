var str="if (1) do print(1); while (false); else 1;";

try
{
    eval(str);
}
catch (e)
{
    print(e);
}


str="do do print(2); while (false); while(false);"
try
{
    eval(str);
}
catch (e)
{
    print(e);
}



var a = 10;
do
  print(3)
while (false)
var b=20;

with(a) do print(4); while (false)

for(var i=0; i<5; i++)
  do
    print("5."+i);
  while(false)


do
  print(6)
while (false)
