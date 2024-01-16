





var o = {};
var v;

function test() {
    v = o.a;
    WScript.Echo("v = " + o.a);
}


test();

test();

o.a = 0;

test();

