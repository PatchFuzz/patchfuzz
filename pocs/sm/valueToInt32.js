function f(x, y) {
    
    var u;
    var a = x + u;
    var b = x + 3;
    return x + y;
}

function g_bool(x, y) {
    var t;
    if (x + 0)
        t = true;
    else
        t = false;
    return t + y;

}
function g_null(x) {
    return null + x;
}

print(g_bool(1, 2), 3);
print(g_bool(0, 2), 2);
print(g_null(2), 2);


print(f(Math.cos(Math.PI), 2), 1);
print(f(null, 2), 2);
print(f(false, 2), 2);
print(f(true, 2), 3);
print(f(17, 2), 19);


print(f(undefined, 2), Number.NaN);
print(f("20", 2), "202");
print(f(16.3, 2), 18.3);
print((1 / f(-0, -0)), -Infinity);


