




function test()
{
    var simple_escape = function()
    {
        return "simple_escape";
    }
    throw simple_escape;
}


function runtest()
{
    try
    {
        test();
    }
    catch (e)
    {
        return e;
    }
};

WScript.Echo((runtest())());
WScript.Echo((runtest())());

