function test0() {
    var o = { p: 0 };
    var func0 = function(o) {
        ++o.p;
        arguments[0] = "x";
        ++o.p;
    }
    func0(o);
    return o.p;
};
print("test0: " + test0());
print("test0: " + test0());
