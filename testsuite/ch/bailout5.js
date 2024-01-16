





var g = false;
function test(i)
{

    var a = i + 1;
    var b = a;
    
    if (g)
    {
        return b;
    }
    return 1;
}


WScript.Echo(test(10));
g = true;
WScript.Echo(test(10));
