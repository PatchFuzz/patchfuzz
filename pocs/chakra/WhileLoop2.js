var x = 100;

function f()
{
    x--;
    return x;
}

for(var i = 0; i < 10; ++i)
{
    var a = i;

    while(f() > 0 && a > 5)
    {
        print("f: " + x);
        --a;
    }
}
