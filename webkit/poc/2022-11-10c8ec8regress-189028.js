function assert(x, y) {
    if (x != y) {
        print("actual: ", x);
        print("expected: ", y);
        throw "FAILED\n" + new Error().stack;
    }
}

var allowDoubleShape = print();

var arrayWithDoubleOrContiguousStr = allowDoubleShape ? "ArrayWithDouble" : "ArrayWithContiguous";
var nonArrayWithDoubleOrContiguousStr = allowDoubleShape ? "NonArrayWithDouble" : "NonArrayWithContiguous";
var copyOnWriteArrayWithDoubleOrContiguousStr = allowDoubleShape ? "CopyOnWriteArrayWithDouble" : "CopyOnWriteArrayWithContiguous";

(function() {
    let arr = [1.1, 2.2];
    let arr2 = [1.1, 2.2];

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), copyOnWriteArrayWithDoubleOrContiguousStr);

    let o = print();

    print(o);

    let proto = new o.Object();
    assert(print(o), true);
    assert(print(proto), true);

    arr2.__proto__ = proto;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "ArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = [1.1, 2.2];

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), copyOnWriteArrayWithDoubleOrContiguousStr);

    let o = print();

    let proto = new o.Object();
    assert(print(o), false);
    assert(print(proto), false);

    arr2.__proto__ = proto;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), arrayWithDoubleOrContiguousStr);

    print(o);

    assert(print(o), true);
    assert(print(proto), true);

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "ArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = {};

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArray");

    let o = print();

    print(o);

    let proto = new o.Object();
    assert(print(o), true);
    assert(print(proto), true);

    arr2.__proto__ = proto;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArray");

    arr2[0] = 1.1;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = {};

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArray");

    let o = print();
    let proto = new o.Object();

    assert(print(o), false);
    assert(print(proto), false);

    arr2.__proto__ = proto;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArray");

    arr2[0] = 1.1;

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), nonArrayWithDoubleOrContiguousStr);

    print(o);

    assert(print(o), true);
    assert(print(proto), true);

    assert(print(arr), false);
    assert(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    assert(print(arr2), false);
    assert(print(arr2), "NonArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    assert(print(g0), false);
    assert(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    assert(print(g1), false);
    assert(print(o1), false);

    let g2 = print();
    assert(print(g2), false);

    print(g1);
    assert(print(g1), true);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o0.__proto__ = o1;

    assert(print(o0), "NonArray");
    assert(print(g0), false);
    assert(print(g2), true);
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    assert(print(g0), false);
    assert(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    assert(print(g1), false);
    assert(print(o1), false);

    let g2 = print();
    assert(print(g2), false);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o0.__proto__ = o1;
    assert(print(g0), false);
    assert(print(g1), false);
    assert(print(g2), false);

    print(g1);

    assert(print(o0), "NonArray");
    assert(print(g0), false);
    assert(print(g1), true);
    assert(print(g2), true);
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    assert(print(g0), false);
    assert(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    assert(print(g1), false);
    assert(print(o1), false);

    let g2 = print();
    let o2 = new g2.Object();
    assert(print(g2), false);
    assert(print(o2), false);

    let g3 = print();
    assert(print(g3), false);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o2.__proto__ = o1;
    g3.Array.prototype.__proto__ = o2;
    o0.__proto__ = o1;
    assert(print(g0), false);
    assert(print(g1), false);
    assert(print(g2), false);
    assert(print(g3), false);

    print(g1);

    assert(print(o0), "NonArray");
    assert(print(g0), false);
    assert(print(g1), true);
    assert(print(g2), true);
    assert(print(g2), true);
})();