function test0(x) {
    with (x)
    {
        z = "4";
    };

    return x;
};

var p={o:1, z:2};
print("p = " + JSON.stringify(p));
var k=test0(p);
print("k = " + JSON.stringify(k));
print("k.z = " + k.z);
print("k.z+1 = " + k.z+1);
