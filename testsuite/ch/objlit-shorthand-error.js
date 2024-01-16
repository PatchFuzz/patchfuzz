





function test(str)
{
    try
    {
        eval(str);
    }
    catch (e)
    {
        WScript.Echo(e);
    }
}

test("var a = { 1} ");
test("var a = { 0.01 } ");
test("var a = { \"s\" } ");
