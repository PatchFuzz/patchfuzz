











function test0() {
    var a = 1;
    var o = [0];
    for(var i = 0; (a |= 1) && i < 1; ++i) {
        test0a();
        for(var j = 0; j < 1; ++j) {
            for(var k = 0; k < 1; ++k) {
                i = a;
            }
            test0a();
        }
        i = a;
    }

    function test0a() { a; }
};
test0();

WScript.Echo("pass");
