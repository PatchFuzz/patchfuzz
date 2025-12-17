function f()
{
    var o = new Object();
    o.i = 0;
    var ret = 0;

    for (var i = 0; i < 10; i++)
    {
        if (i % 2 == 0)
        {
            var j = o.i;
            o.i = i;
            var k = o.i;
            ret += j + k;
        }
        else
        {
            o.i = ret;
        }
    }
    return ret;
}
var x = f();
if (x == 52)
{
    print("PASS");
}
else
{
    print("FAIL: got " + x);
}
