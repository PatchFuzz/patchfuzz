






function TrimStackTracePath(obj)
{
    return obj;
}
if (this.WScript && typeof this.WScript.LoadScriptFile === "function")
{
    this.WScript.LoadScriptFile("../UnitTestFramework/TrimStackTracePath.js");
}

function PadString(i)
{
    var s = "";
    if (i === null) {
        s = "null";
    } else if (i === undefined) {
        s = "undefined";
    } else {
        s = i.toString();
    } 
    
    while (s.length < 12) {
        s += ' ';
    }
    return s;
}

function DumpProperty(pname, p)
{
    if (pname === "stack")
    {
        p = TrimStackTracePath(p);
    }
    WScript.Echo(PadString(pname) + " = " + PadString(p) + "(" + typeof(p) + ")");
}

function DumpObject(e)
{
    
    DumpProperty("message", e.message);
    DumpProperty("name", e.name);

    var a = new Array();
    for (var i in e)
    {
        a[a.length] = i;
    }
    a[a.length] = "number";
    a[a.length] = "stack";
    a.sort();
    for (var j = 0; j < a.length; j++)
    {
        i = a[j];
        DumpProperty(i, e[i]);
    }
}

function Test(typename, s)
{
    WScript.Echo("-----------------------------------------");
    WScript.Echo(typename + "(" + s + ")");
    var e = eval("new " + typename + "(" + s + ")");
    DumpObject(e);
}

function TestCtor(typename)
{
    
    Test(typename, "");

    
    Test(typename, "NaN, NaN");
    Test(typename, "1, 1");
    Test(typename, "1.1, 1.1");
    Test(typename, "undefined, undefined");
    Test(typename, "null, null");
    Test(typename, "true, true");
    Test(typename, "false, false");
    Test(typename, "'blah', 'blah'");

    
    Test(typename, "new Object(), new Object()");
    Test(typename, "new String('blah'), new String('blah')");
    Test(typename, "new Number(1.1), new Number(1.1)");
    Test(typename, "new Boolean(true), new Boolean(true)");
    Test(typename, "Test, Test");

    
    Test(typename, "NaN");
    Test(typename, "1");
    Test(typename, "undefined");
    Test(typename, "null");
    Test(typename, "true");
    Test(typename, "false");
    Test(typename, "'blah'");

    
    Test(typename, "new Object()");
    Test(typename, "new String('blah')");
    Test(typename, "new Number(1.1)");
    Test(typename, "new Boolean(1.1)");
    Test(typename, "Test");
}

TestCtor("Error");
TestCtor("TypeError");
