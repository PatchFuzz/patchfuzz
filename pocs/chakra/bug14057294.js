function foo(a, b = (function() {a;})())
{
    for (var ii = 0; ii < 200; ++ii)
    {
        var c, d = null;
        function bar()
        {
            c;
            d;
        };
        bar();
    }
};

foo();

print("Pass")
