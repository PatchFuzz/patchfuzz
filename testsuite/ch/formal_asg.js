






function test(param)
{
    var l = param;
    param = function() { return l; }

    return arguments[0];
}


WScript.Echo(test("test1")());
WScript.Echo(test("test2")());

