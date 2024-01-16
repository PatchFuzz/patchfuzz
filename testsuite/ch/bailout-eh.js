





var g = 1;
function test()
{
    
    throw g;
}

try
{
    test()
}
catch (e)
{
    WScript.Echo(e);
}
WScript.Echo(g);
