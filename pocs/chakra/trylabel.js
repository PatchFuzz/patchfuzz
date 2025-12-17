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
        print(e);
    }
}
f();

