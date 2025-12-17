function F() {
    var T = { };
    try {
        throw 12;
    } catch (e) {
        T.x = 5;
        return T;
    }
}

print((new F()).x, 5);

