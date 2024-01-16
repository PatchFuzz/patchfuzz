






var glo;
function test()
{
    function nested1(param2)
    {
        function nested2()
        {
            return  param2;
        }

        escape();
        return 'pass';
    }
    WScript.Echo(nested1());

    function blah() { return 'pass' }
    function escape() { glo = blah; }
}


test("test3" )
WScript.Echo(glo());

CollectGarbage();

test("test1");
