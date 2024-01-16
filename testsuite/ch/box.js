





var glo;
var box = false;
function test(param)
{
    var recurse = 0;
    function nested1(param2)
    {
        function nested2()
        {
            return param + param2;
        }

        recurse++;
        if (recurse < 10)
        {
            return nested1(param + param2 + recurse);
        }
        if (box)
        {
            escape();
            return glo();
        }
        return nested2();
    }
    WScript.Echo(nested1());

    function blah() { return "blah"; }
    function escape() { glo = blah; }
}


test("test1");
test("test2");  
box = true;
test("test3" )
WScript.Echo(glo());
