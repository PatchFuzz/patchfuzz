var obj = {
    f: function (s) {
        return a => eval(s);
    }
};

var g = obj.f("this");
print(g(), obj);

var obj2 = {g: g, fail: true};
print(obj2.g(), obj);
