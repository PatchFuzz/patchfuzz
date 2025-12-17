function test(param)
{
    var f;

    {
        let x = param + "str";
        f = function() { return x; }
    }
    return f();
}


print(test("test1"));
print(test("test2"));


