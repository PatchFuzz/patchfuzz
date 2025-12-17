var a;
function foo()
{
    var b = 1073741824 | undefined;
    try
    {
        b *= 2;
    }
    catch(e)
    {

    }

    a = b;
}

foo();
foo();
foo();

print( a == 2147483648 ? "PASSED" : "FAILED");