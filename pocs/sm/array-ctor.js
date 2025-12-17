function testArrayRealm() {
    var g = newGlobal();
    var A = g.Array;
    for (var i = 0; i < 100; i++) {
        var a;
        a = new A();
        print(isSameCompartment(a, g), true);
        print(Object.getPrototypeOf(a), A.prototype);

        a = new A(i);
        print(isSameCompartment(a, g), true);
        print(Object.getPrototypeOf(a), A.prototype);
    }
}
testArrayRealm();

function testErrorRealm() {
    var g = newGlobal();
    var A = g.Array;
    for (var i = 50; i > -50; i--) {
        var a = null;
        var ex = null;
        try {
            a = new A(i);
        } catch (e) {
            ex = e;
        }
        if (i >= 0) {
            print(Object.getPrototypeOf(a), A.prototype);
        } else {
            print(ex instanceof g.RangeError, true);
        }
    }
}
testErrorRealm();
