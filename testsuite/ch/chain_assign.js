





function test(param)
{
    var x;
    var y;
    x = (y = function() { return param; });

    return x;
}

WScript.Echo((test("test1"))());
WScript.Echo((test("test2"))());
