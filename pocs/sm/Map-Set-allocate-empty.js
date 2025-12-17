function testMap() {
    for (var i = 0; i < 100; i++) {
        var m = new Map();
        print(m.size, 0);
        print(m.has(this), false);
        print(m.get(this), undefined);
        print(m.delete(this), false);
        m.clear();
        var it = m.values();
        print(it.next().done, true);
    }
}
testMap();

function testSet() {
    for (var i = 0; i < 100; i++) {
        var s = new Set();
        print(s.size, 0);
        print(s.has(this), false);
        print(s.delete(this), false);
        s.clear();
        var it = s.values();
        print(it.next().done, true);
    }
}
testSet();
