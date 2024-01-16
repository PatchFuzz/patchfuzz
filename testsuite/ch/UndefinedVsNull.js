








if (undefined == null)
    WScript.Echo("Algorithm says equivalent");
else
    WScript.Echo("Objects are not equivalent");





if (undefined === null)
    WScript.Echo("Same instance");
else
    WScript.Echo("Different instances");

if (undefined === undefined)
    WScript.Echo("Same instance");
else
    WScript.Echo("Different instances");

if (null === null)
    WScript.Echo("Same instance");
else
    WScript.Echo("Different instances");

function dump(a, index)
{
    var value = a[index];
    if (value === undefined)
    {
        WScript.Echo("'undefined'");
    }
    else if (value === null)
    {
        WScript.Echo("'null'");
    }
    else
    {
        WScript.Echo(value);
    }
}





var a = new Array(2);

dump(a, 0);
dump(a, 1);

dump(a, 10);
a[10] = 'A';
dump(a, 10);

dump(a, 5);
