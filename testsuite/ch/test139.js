




function test0() {
    var o = {
        p0: 0,
        p1: 1
    };
    var a = o.p0;
    o.p2 = 2;
    return a;
}
WScript.Echo(test0());
WScript.Echo(test0());
WScript.Echo(test0());

function test1() {
    var o = {
        p0: 0,
        p1: 1
    };
    var a = o.p2;
    o.p2 = 2;
    return a;
}
WScript.Echo(test1());
WScript.Echo(test1());
WScript.Echo(test1());
