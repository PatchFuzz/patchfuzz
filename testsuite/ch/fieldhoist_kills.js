







function test0() {
    var o1 = { p: 0 };
    var o2 = { p: 4 };
    for(; o1.p < o2.p; ++o1.p)
        test0b();
    return o1.p;

    function test0a() { eval(""); }
    function test0b() { o2 = 0; }
}
WScript.Echo("test0: " + test0());
