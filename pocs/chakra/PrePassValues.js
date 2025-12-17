var Failed = false;

function foo(last)
{
    var x = 0.1;
    var y = 0.2;
    var z = "Louie ";
    var w;

    for (var i = 0; i < 3; i++)
    {
        w = x + x;  
        x = y;
        y = z;
    }

    if (w != "Louie Louie ")
    {
        print("w = " + w);
        print("FAILED");
        Failed = true;
    }
    else if (last && !Failed)
    {
        print("Passed");
    }
}

for (var i = 0; i < 500; i++)
{
    foo(false);
}

foo(true);
