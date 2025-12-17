function f(arr, b) {
    var res = "";
    var a;
    if (b)
        a = arr;
    for (var i=100; i>-200; i--) {
        if (i in a) {
            res += i;
        }
    }
    return res;
}

print(f([1, , 2, 3], true), "320");

try {
    f([1, , 2, 3], false);
    print(0, 1);
} catch(e) {
    print(e instanceof TypeError, true);
}
