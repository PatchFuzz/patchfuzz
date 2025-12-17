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
print(glo());
test("test2");
print(glo());

