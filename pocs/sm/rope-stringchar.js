function f(a, b) {
    print(isLatin1(a), true);
    print(isLatin1(b), false);
    var c = a + b;
    print(isLatin1(c), false);
    print(c[4], 'b');
    print(c.charCodeAt(4), 98);
}

function test() {
    for (var i = 0; i < 15; i++) {
        f("aaaab\x00\x00\x00\x00\x00\x00", "\u{2603}");
    }
}

test();
