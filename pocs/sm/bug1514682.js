function f(o, n) {
    if (n) {
        o[n] = true;
    } else {
        o.x = true;
    }
}


var o = {};
for (var i = 0; i < 43; ++i) {
    o["x" + i] = true;
}

f(o, "y");
