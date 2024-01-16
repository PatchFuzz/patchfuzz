




function func(i)
{
    var a = 3;
    var b;

    if (i)
    {
        a = 4;
        b = a + i;
    }
    else
    {
        b = a + i;
    }
    return b;
}


WScript.Echo(func(true));
WScript.Echo(func(false));
