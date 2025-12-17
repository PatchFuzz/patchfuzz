for (var i = 0; i < 12; ++i) {
    var o;

    o = new Object(Object);
    print(o, Object);

    (function () {
        x = constructor
    })();
    o = new(x)(x);
    print(o, Object);
}
