function TrimStackTracePath(obj)
{
    return obj;
}
if (print && typeof print === "function")
{
    print("../UnitTestFramework/TrimStackTracePath.js");
}

function PadString(s, l)
{
    while (s.length < l)
    {
        s += ' ';
    }
    return s;
}
function DumpObject(o)
{
    var a = new Array();
    for (var i in o)
    {
        a[a.length] = i;
    }
    a[a.length] = "description"; 
    a[a.length] = "number";
    a[a.length] = "stack";
    a.sort();
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] === "stack")
        {
            o[a[i]] = TrimStackTracePath(o[a[i]]);
        }
        print(PadString(a[i], 15) + "= " + PadString("(" + typeof(o[a[i]]) + ")", 10) + o[a[i]]);
    }
    print(PadString("toString()", 15) + "= " + o.toString());
}

function Test(s)
{
    print(s);
    DumpObject(eval("new " + s));
    print();
}

function safeCall(f)
{
    var args = [];
    for (var a = 1; a < arguments.length; ++a)
        args.push(arguments[a]);
    try
    {
        return f.apply(this, args);
    }
    catch (ex)
    {
        print(ex.name + ": " + ex.message);
    }
}

Test("EvalError");
Test("RangeError('This is a range error')");
Test("ReferenceError");
Test("SyntaxError");
Test("TypeError('This is a type error')");
Test("URIError");
safeCall(Test, "RegExpError");
safeCall(Test, "ConversionError");
