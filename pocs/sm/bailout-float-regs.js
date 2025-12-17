function f() {
    var res = 0;
    for (var i = 0; i < 2000; i++) {
        var res1 = Math.abs(i - 123.5); 
        var res2 = Math.fround(i + 0.5); 
        if (i > 1900) {
            bailout();
        }
        res += res1 + res2;
    }
    print(res, 3767376);
}
f();
