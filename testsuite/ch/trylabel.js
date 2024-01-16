





function t()
{
    throw "PASS";
}
function f()
{
    try 
    {
        while (true) { t(); } 
    }
    catch (e) 
    {
        WScript.Echo(e);
    }
}
f();

