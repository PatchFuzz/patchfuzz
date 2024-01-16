


a = evalcx("lazy");
b = {}
b.__proto__ = a
a.__proto__ = String
for (var a = 0; a < 50; a++) {
    try {
        b + ""
    } catch (e) {}
}
