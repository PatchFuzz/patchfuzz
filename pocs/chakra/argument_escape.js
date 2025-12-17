function test(param)
{
    var l = param;
    param = function() { return l; }

    return arguments;
}


print(test("test1")[0]());
print(test("test2")[0]());

