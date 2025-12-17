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

print((test("test1"))());
print((test("test2"))());
