






function test(param, func)
{
    function func()
    {
        return param;
    }
    return func();
}

WScript.Echo(test("test1"));
WScript.Echo(test("test2"));

