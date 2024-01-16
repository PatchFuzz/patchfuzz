




function test0(a) {
    for(var i = 0; i < 1 ; ++i) {
        a[1] = 0;
        a[0] = 0;
    }
}
test0([0, 0]);
var a = [];
test0(a);
WScript.Echo("test0: " + a[1]);
