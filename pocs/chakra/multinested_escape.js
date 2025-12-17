var escape;

function test(param)
{
    function outer()
    {
        function inner()
        {
            escape = nested;
        }
        inner();
    }


    function nested()
    {
        return param;
    }

    outer();
}


test("test1");
print(escape());
test("test2");
print(escape());
