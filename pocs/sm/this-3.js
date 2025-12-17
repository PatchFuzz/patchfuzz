var obj = {
    f: function (s) {
        return eval(s);
    }
};

var g = obj.f("a => this");
print(g(), obj);

var obj2 = {g: g, fail: true};
print(obj2.g(), obj);
