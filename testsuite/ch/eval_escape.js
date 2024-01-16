





var escape;
function test(param)
{
    var nested = function() { return param; }
    eval("escape = nested");
}

test("test1");
WScript.Echo(escape());

test("test2");
WScript.Echo(escape());

