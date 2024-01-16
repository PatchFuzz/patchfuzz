




function dump(a)
{
    if (a == null)
    {
        WScript.Echo("'null'");
    }
    else if (a == undefined)
    {
        WScript.Echo("'undefined'");
    }
    else
    {
        WScript.Echo(a);
    }
}


function f1(a, b)
{
    

    dump("f1(a, b)");
    dump(a);
    dump(b);
}



f1(1, 2);


f1(1, 2, 3, 4);


f1(1);
