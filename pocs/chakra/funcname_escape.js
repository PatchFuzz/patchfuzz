function test()
{
    var i = 0;
    function f1()
    {
        if (i == 0)
        {
            i++;
            return f1();
        }
        return i;
    }
    return f1;
}

print((test())());
print((test())());

