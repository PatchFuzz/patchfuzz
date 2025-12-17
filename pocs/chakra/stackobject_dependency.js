function f() {}

var g = {};
function test()
{
    var obj1 = {}
    for (var i = 0; i < 2; i++)
    {
        var obj6 = obj1;
        obj6.blah;
        f();
        var obj6 = g;
        var obj1 = {};
        g.blah;
    }

}

test({});
test({});
