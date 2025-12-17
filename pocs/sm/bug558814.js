function f()
{
    var a = [];
    a.length = 10;
    for (var i = 0; i < 100; i++) {
        var y = a[a.length];
    }
}
f();

