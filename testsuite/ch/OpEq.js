




var G = 0;
var x = new Array();
var obj = new Object();
var i = 0;
obj.y = 0;

x[i] = i;

function foo()
{
    G++;
    return x;
}
function bar()
{
    G++;
    return obj;
}

foo()[i++]++;

bar().y += G;

if (x[0] != 1 || x.length != 1 || G != 2 || i != 1 || obj.y != 2)
{
    WScript.Echo("FAILED");
}
else
{
    WScript.Echo("Passed");
}
