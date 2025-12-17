function f(x, from, to) {
    var y = 0;
    for (var i=from; i<to; i++) {
        y = i * x;
    }
    return y;
}

print(f(0, 0, 200), 0);
print(f(0, -10, -5), -0);
