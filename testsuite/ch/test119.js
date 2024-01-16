




function test0(a) {
    a[0]();
}
var a = new Uint32Array(1);
try {
    test0(a);
}
catch(ex) {
}
try {
    test0(a);
}
catch(ex) {
    WScript.Echo(ex.message);
}
