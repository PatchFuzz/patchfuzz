var x = {a: 1, b: 2, c: 3};

x.__proto__ = {};

delete x.b;

x.d = 4;

s = "";

for (key in x) {
    s += x[key];
}

print("134", s);
