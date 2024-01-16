




function bar(x)
{
    if (x != x)
    {
        return;
    }
}

function foo()
{
    bar(typeof arguments[0]);
};

foo();
foo();
foo();

WScript.Echo("Passed");
