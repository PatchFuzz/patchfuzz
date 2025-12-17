function f(o)
{
    var s;
    for (var i = 0; i < 2; i++)
    {
        s = typeof o.x;
        var f = o.x;
    }
    return s;
}

print(f({x:1}));
