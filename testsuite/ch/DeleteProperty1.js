




var x = {a:0, b:10, c:20};
for (i in x)
{
    WScript.Echo(i + " = " + x[i]);
}
delete x.b;
for (i in x)
{
    WScript.Echo(i + " = " + x[i]);
}
x.b = 23;
for (i in x)
{
    WScript.Echo(i + " = " + x[i]);
}
delete x.b;
for (i in x)
{
    WScript.Echo(i + " = " + x[i]);
}
