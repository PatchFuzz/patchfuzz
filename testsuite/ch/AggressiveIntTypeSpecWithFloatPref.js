








function test0(c) {
    var a = 1;
    function test0a() {
        a;
    }
    b = 1;
    do {
        b * (1 ? a : 0.1) + c * 3;
    } while(false);
}
test0(0x3fffffff);
