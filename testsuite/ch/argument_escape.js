






function test(param)
{
    var l = param;
    param = function() { return l; }

    return arguments;
}


WScript.Echo(test("test1")[0]());
WScript.Echo(test("test2")[0]());

