;

function f() {
    var g = a => [0, 1].map(x => { return x + a; });
    return g(13);
}

print(f(), [13, 14]);
