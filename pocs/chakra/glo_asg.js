var escape;
function test(param)
{
    escape = function() { return param; }
}

test("test1");
print(escape());
test("test2");
print(escape());
