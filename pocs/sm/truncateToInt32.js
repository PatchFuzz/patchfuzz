function w(y)
{
    var x = 23.5;
    return x & y;
}

function f(x, y) {
    
    var t = 3.5 + x;
    t + 3.5;
    return x & y;
}

function g_bool(x, y) {
    var t;
    if (x + 0)
        t = true;
    else
        t = false;
    return t & y;

}

function g_null(x) {
    return null & x;
}

var obj = { valueOf: function () { return 5; } }

print(w(93), 21);
print(g_bool(1, 3), 1);
print(g_bool(0, 3), 0);
print(g_null(2), 0);

print(f(1, 7), 1);
print(f(true, 7), 1);
print(f(false, 7), 0);
print(f("3", 7), 3);
print(f(obj, 7), 5);
print(f(3.5, 7), 3);
print(f(undefined, 7), 0);
print(f(null, 7), 0);
print(f(Math.NaN, 7), 0);

