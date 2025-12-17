function test()
{
    var i = 0;
    
    
    var f = function f1()
    {
        if (i == 0)
        {
            i++;
            return f1();
        }
        return i;
    }
    return f();
}

print(test());
print(test());

