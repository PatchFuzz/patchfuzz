





function test0(x) {
    with (x)
    {
        z = "4";
    };

    return x;
};

var p={o:1, z:2};
WScript.Echo("p = " + JSON.stringify(p));
var k=test0(p);
WScript.Echo("k = " + JSON.stringify(k));
WScript.Echo("k.z = " + k.z);
WScript.Echo("k.z+1 = " + k.z+1);
