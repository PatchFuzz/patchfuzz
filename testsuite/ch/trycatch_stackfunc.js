





function test(param)
{
    var nested = function() { return param; }
    try
    {
        var inner = function() { return nested(); }
        WScript.Echo(inner());
    }
    catch (e)
    {
    }

    WScript.Echo(inner());
}


test("test1");
test("test2");
