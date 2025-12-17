var obj = {
    f: function (expected) {
        print(this, expected);
        return a => this;
    }
};

var g = obj.f(obj);
print(g(), obj);

var obj2 = {f: obj.f};
var g2 = obj2.f(obj2);
print(g2(), obj2);
print(g(), obj);

