function test(param)
{
    var nested = function() { return param; }
    try
    {
        var inner = function() { return nested(); }
        print(inner());
    }
    catch (e)
    {
    }

    print(inner());
}


test("test1");
test("test2");
