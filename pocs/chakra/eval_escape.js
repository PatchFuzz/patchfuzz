var escape;
function test(param)
{
    var nested = function() { return param; }
    eval("escape = nested");
}

test("test1");
print(escape());

test("test2");
print(escape());

