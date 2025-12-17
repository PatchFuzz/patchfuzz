function print(x, y) {
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

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), copyOnWriteArrayWithDoubleOrContiguousStr);

    let o = print();

    print(o);

    let proto = new o.Object();
    print(print(o), true);
    print(print(proto), true);

    arr2.__proto__ = proto;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "ArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = [1.1, 2.2];

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), copyOnWriteArrayWithDoubleOrContiguousStr);

    let o = print();

    let proto = new o.Object();
    print(print(o), false);
    print(print(proto), false);

    arr2.__proto__ = proto;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), arrayWithDoubleOrContiguousStr);

    print(o);

    print(print(o), true);
    print(print(proto), true);

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "ArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = {};

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArray");

    let o = print();

    print(o);

    let proto = new o.Object();
    print(print(o), true);
    print(print(proto), true);

    arr2.__proto__ = proto;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArray");

    arr2[0] = 1.1;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let arr = [1.1, 2.2];
    let arr2 = {};

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArray");

    let o = print();
    let proto = new o.Object();

    print(print(o), false);
    print(print(proto), false);

    arr2.__proto__ = proto;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArray");

    arr2[0] = 1.1;

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), nonArrayWithDoubleOrContiguousStr);

    print(o);

    print(print(o), true);
    print(print(proto), true);

    print(print(arr), false);
    print(print(arr), copyOnWriteArrayWithDoubleOrContiguousStr);
    print(print(arr2), false);
    print(print(arr2), "NonArrayWithSlowPutArrayStorage");
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    print(print(g0), false);
    print(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    print(print(g1), false);
    print(print(o1), false);

    let g2 = print();
    print(print(g2), false);

    print(g1);
    print(print(g1), true);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o0.__proto__ = o1;

    print(print(o0), "NonArray");
    print(print(g0), false);
    print(print(g2), true);
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    print(print(g0), false);
    print(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    print(print(g1), false);
    print(print(o1), false);

    let g2 = print();
    print(print(g2), false);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o0.__proto__ = o1;
    print(print(g0), false);
    print(print(g1), false);
    print(print(g2), false);

    print(g1);

    print(print(o0), "NonArray");
    print(print(g0), false);
    print(print(g1), true);
    print(print(g2), true);
})();

gc();

(function() {
    let g0 = print();
    let o0 = new g0.Object(); 
    print(print(g0), false);
    print(print(o0), false);

    let g1 = print();
    let o1 = new g1.Object();
    print(print(g1), false);
    print(print(o1), false);

    let g2 = print();
    let o2 = new g2.Object();
    print(print(g2), false);
    print(print(o2), false);

    let g3 = print();
    print(print(g3), false);

    o1.__proto__ = null;
    g2.Array.prototype.__proto__ = o1;
    o2.__proto__ = o1;
    g3.Array.prototype.__proto__ = o2;
    o0.__proto__ = o1;
    print(print(g0), false);
    print(print(g1), false);
    print(print(g2), false);
    print(print(g3), false);

    print(g1);

    print(print(o0), "NonArray");
    print(print(g0), false);
    print(print(g1), true);
    print(print(g2), true);
    print(print(g2), true);
})();