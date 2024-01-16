




function foo()
{
    function blah() {}
}

function bar(f)
{
    for (var i = 0; i < 1; i++)
    {
        if (f)
        {
            f();
        }
    }
}

bar(foo);
bar(foo);
bar();

WScript.Echo("PASSED");