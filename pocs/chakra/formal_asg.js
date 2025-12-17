function test(param)
{
    var l = param;
    param = function() { return l; }

    return arguments[0];
}


print(test("test1")());
print(test("test2")());

