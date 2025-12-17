function func(x, f)
{
    print(f());
}
function test(param)
{
    var call_escape = function()
    {
        return param;
    }
    func(1, call_escape);
}

test("test1");
test("test2");

