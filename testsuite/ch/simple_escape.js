




function test()
{
    var simple_escape = function()
    {
        return "simple_escape";
    }
    return simple_escape;
}

WScript.Echo((test())());
WScript.Echo((test())());

