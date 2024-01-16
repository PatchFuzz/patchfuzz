





var escape;
function test(param)
{
    escape = function() { return param; }
}

test("test1");
WScript.Echo(escape());
test("test2");
WScript.Echo(escape());
