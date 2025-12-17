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
print(escape());

test("test2");
print(escape());

