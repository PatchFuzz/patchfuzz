function test()
{
    var simple_escape = function()
    {
        return "simple_escape";
    }
    return simple_escape;
}

print((test())());
print((test())());

