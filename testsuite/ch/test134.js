




function test0() {
    (function() { })(!(o.p *= x) ? Math.atan(!(o.p *= x)) : 1);
}
var o = {};
var x = 1;
o.p = 100;
o.p = test0();
test0();
WScript.Echo(o.p);
