








var a1 = new Array();
a1[2] = "B";
a1[3] = "C";






a1[20] = "T";







for (var idx = 0; idx < a1.length; idx++)
{
    var val = a1[idx];
    if (val == undefined)
    {
        WScript.Echo("undefined");
    }
    else if (val == null)
    {
        WScript.Echo("null");
    }
    else
    {
        WScript.Echo(val);
    }
}
