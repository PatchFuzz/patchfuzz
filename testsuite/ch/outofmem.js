





try
{
    var longString = "A";
    for (var i = 0; i < 31; i++)
        longString += longString;
    WScript.Echo(longString.toString());
}
catch (e)
{
    WScript.Echo(e.name);
    WScript.Echo(e.message);
    WScript.Echo(e.number);
}

