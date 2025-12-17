var glo;
var box = false;
function test(param)
{
    var recurse = 0;
    function nested1(param2)
    {
        function nested2(re)
        {
            if (re)
            {
                nested2();
            }
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
            return nested2() + blah();
        }
        return nested2();
    }
    print(nested1());

    function blah() { return "blah"; }
}
function escape()
{
    glo = escape.caller;
}


test("test1");
test("test2");  
box = true;
test("test3" )
print(glo());
