







WScript.Echo("relational");
j = 0;
for(var i = 0x1ffffffc; i < 0x20000003; ++i)
{
    WScript.Echo(++j);
}
j = 0;
for(var i = -0x20000003; i < -0x1ffffffc; ++i)
{
    WScript.Echo(++j);
}


WScript.Echo("equality");
j = 0;
for(var i = 0x1ffffffc; i != 0x20000003; ++i)
{
    WScript.Echo(++j);
}
j = 0;
for(var i = -0x20000003; i != -0x1ffffffc; ++i)
{
    WScript.Echo(++j);
}
