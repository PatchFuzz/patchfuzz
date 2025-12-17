function test0() {
    var a = new Uint8Array(1);
    return a[-1] * 0 - 1 <= 0 ? false : true;
}
print("test0: " + test0());


function test1() {
    var a = new Uint8Array(1);
    var b = a[-1] * 0;
    --b;
    return b <= 0 ? false : true;
}
print("test1: " + test1());


function test2(a, b) {
    b &= 1;
    return (a * 0 + b) * 0 < 0 ? false : true;
}
for(var i = 0; i < 1000; ++i)
    test2(0, 0);
print("test2: " + test2({ valueOf: function() { print("test2: valueOf a"); } }, 0));





function test3(a, b) {
    while((a & 1) * 0 + 1 == b * 0)
        a |= 0;
    return a * 0 - 1 <= 0 ? false : true;
}
for(var i = 0; i < 1000; ++i)
    test3(0, 0);
print("test3: " + test3({ valueOf: function() { print("test3: valueOf a"); } }, 0));





function test4() {
    var m = 1;
    for(var i = 0; i < 1; ++i)
        --m;
    1.1 ? 1 : m = g++;
    for(var i = 0; i < 1; ++i) {
        1.1 ? 1 : 1 > m ? 1 : 1;
        if(1)
            i |= m;
    }
    return m;
}
print("test4: " + test4());











function test5(c) {
    var a = 0;
    for(var b = 0; b < c; ++b)
        if(c === 2)
            a = b;
    return a;
}
print("test5: " + test5(2));













function test6() {
    var a, b = 0, c = 0;
    for(var i = 0; i < 3; ++i) {
        a = b;
        b = c;
        c += 1.1;
    }
    return a;
}
print("test6: " + test6());


function test7() {
    var a, b = 0, c = 0, d = 0;
    for(var i = 0; i < 4; ++i) {
        a = b;
        b = c;
        c = d;
        d += 1.1;
    }
    return a;
}
print("test7: " + test7());










function test8(a) {
    var o = { p: 0 };
    for(var i = 0; i < 1; ++i) {
        if(a) {
            o.p = "";
            ++o.p;
        } else
            ++o.p;
    }
    return o.p;

    function test8a() { o; }
}
print("test8: " + test8(false));









function test9() {
    var f, b, u;
    for(var r = [[0]], o = 0; o < r.length; ++o) {
        r[0].length = (0x3fffffff << 1) + 3;
        for(f = r[o], b = f.length, u = 0x3fffffff << 1; u < b; u++)
            b !== 0 && r.push(0);
    }
}
print("test9: " + test9());





function test10(a) {
    return (610611150 * 1322123869 - a) | 0;
};
print("test10: " + test10(0));







function test11() {
    var a = 0;
    for(var i = 0; i < 1; ++i)
        a = 1;
    var b = a;
    a = (1 - a) * -1;
    return b;
};
print("test11: " + test11());
