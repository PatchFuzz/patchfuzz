function test(param)
{
    var x;
    var y;
    x = (y = function() { return param; });

    return x;
}

print((test("test1"))());
print((test("test2"))());
