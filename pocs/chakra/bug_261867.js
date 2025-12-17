function test0() {
    var obj0 = {};
    var arrObj0 = {};
    arrObj0.method0 = function () {
        arrObj0.prop0 += 1 
    }
    var l = 1;
    var m = 65536;
    var q = 1;
    l = (m * (1 - m));
    q ^= arrObj0.method0.call(obj0);
};
test0();
test0();

print("pass");
