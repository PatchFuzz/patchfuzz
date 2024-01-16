






function test(param)
{
    var f;

    {
        let x = param + "str";
        f = function() { return x; }
    }
    return f();
}


WScript.Echo(test("test1"));
WScript.Echo(test("test2"));


