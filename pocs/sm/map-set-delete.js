function test() {
    var m = new Map();
    var s = new Set();
    for (var i = 0; i < 100; i++) {
        print(m.delete("a" + (i - 1)), i > 0);
        print(m.delete("a" + (i - 1)), false);

        print(s.delete("b" + (i - 1)), i > 0);
        print(s.delete("b" + (i - 1)), false);

        m.set("a" + i, i);
        s.add("b" + i);
    }
    print(m.size, 1);
    print(s.size, 1);
}
test();
