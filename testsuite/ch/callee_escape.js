




var glo;
function test(param)
{
    function nested()
    {
        escape();
        return param;
    }
    function escape()
    {
        if (!glo)
            glo = arguments.callee.caller;
    }

    nested();
}


test("test1");
WScript.Echo(glo());
glo = undefined;


