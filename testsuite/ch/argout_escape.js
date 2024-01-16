





var glo;
function escape(f)
{
    glo = f;
}
function test(param)
{

    escape(function() { return param; });
}


test("test1");
WScript.Echo(glo());
test("test2");
WScript.Echo(glo());

