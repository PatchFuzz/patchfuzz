function testCall() {
    var g = newGlobal({sameCompartmentAs: this});
    for (var i = 0; i < 20; i++) {
        print(objectGlobal(g.Array(1, 2, 3)), g);
        print(objectGlobal(new g.Array(1, 2, 3)), g);
    }
    for (var i = 0; i < 20; i++) {
        g.Error();
        g.print();
        if (i > 15)
            g.gc();
    }
}
testCall();

function testAccessor() {
    var g = newGlobal({sameCompartmentAs: this});
    var o = {};
    Object.defineProperty(o, "foo", {get: g.assertCorrectRealm,
                                     set: g.assertCorrectRealm});
    for (var i = 0; i < 20; i++)
        o.foo;
    for (var i = 0; i < 20; i++)
        o.foo = 1;
    Object.defineProperty(o, "arr", {get: g.Array});
    for (var i = 0; i < 20; i++) {
        var arr = o.arr;
        print(objectGlobal(arr), g);
        print(arr.__proto__, g.Array.prototype);
    }
}
testAccessor();

function testException1() {
    var g = newGlobal({sameCompartmentAs: this});
    for (var i = 0; i < 20; i++) {
        var ex;
        try {
            g.throwOutOfMemory();
        } catch(e) {
            ex = e;
        }
        print();
        print(typeof ex, "string");
    }
}
testException1();

function testDOMCalls() {
    var g = newGlobal({sameCompartmentAs: this});
    var obj = g.evaluate("new FakeDOMObject()");
    for (var i = 0; i < 2000; i++) {
        print();
        print(obj.doFoo(1), 1);
        print(typeof obj.x, "number");
        print(obj.global, g);
        obj.global = g; 
    }
}
testDOMCalls();
