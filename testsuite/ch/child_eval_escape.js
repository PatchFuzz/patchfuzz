





var escape;
function test(param)
{
    var nested = function() { return param; }
    function child()
    {
        eval("escape = nested");
    }
    child();
}

test("test1");
WScript.Echo(escape());

test("test2");
WScript.Echo(escape());

