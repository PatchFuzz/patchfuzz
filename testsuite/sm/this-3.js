

var obj = {
    f: function (s) {
        return eval(s);
    }
};

var g = obj.f("a => this");
assertEq(g(), obj);

var obj2 = {g: g, fail: true};
assertEq(obj2.g(), obj);
