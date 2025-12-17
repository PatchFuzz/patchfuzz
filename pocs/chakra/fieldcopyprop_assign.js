function f(o)
{
    var v = 0;
    for (var i = 0; i < 10; i++)
    {
        var a = o.x;
        o = o.y;
        var b = o.x;
        v += a + b;
    }
    return v;
}

var o = new Object();
o.x = -1;
var a = o;
for (var i = 0; i < 10; i++)
{
    o.y = new Object();
    o = o.y;
    o.x = i;
}
o.y = a;

print(f(a) == 80? "PASS" : "FAIL");
