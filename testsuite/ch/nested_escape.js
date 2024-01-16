




function test(param)
{
    function nested()
    {
        var nested_escape = function()
        {
            return param;
        }

        var inner = function()
        {
            return nested_escape;
        }
        return inner();
    }
    return nested();
}

WScript.Echo((test("test1"))());
WScript.Echo((test("test2"))());
