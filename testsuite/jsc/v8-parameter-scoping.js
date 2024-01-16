


























function assert(b) {
    if (!b)
        throw new Error("bad");
}

function assertEquals(a, b) {
    assert(a === b);
}

function assertTrue(a) {
    assert(a === true);
}

;(function testExpressionTypes() {
    "use strict";
    ((x, y = x) => assertEquals(42, y))(42);

    ((x, y = (x)) => assertEquals(42, y))(42);
    ((x, y = `${x}`) => assertEquals("42", y))(42);
    ((x, y = x = x + 1) => assertEquals(43, y))(42);
    ((x, y = x()) => assertEquals(42, y))(() => 42);
    ((x, y = new x()) => assertEquals(42, y.z))(function() { this.z = 42 });
    ((x, y = -x) => assertEquals(-42, y))(42);
    ((x, y = ++x) => assertEquals(43, y))(42);
    ((x, y = x === 42) => assertTrue(y))(42);
    ((x, y = (x == 42 ? x : 0)) => assertEquals(42, y))(42);

    ((x, y = function() { return x }) => assertEquals(42, y()))(42);
    ((x, y = () => x) => assertEquals(42, y()))(42);

    
    ((x, y = {z: x}) => assertEquals(42, y.z))(42);
    ((x, y = {[x]: x}) => assertEquals(42, y[42]))(42);
    ((x, y = [x]) => assertEquals(42, y[0]))(42);
    ((x, y = [...x]) => assertEquals(42, y[0]))([42]);

    ((x, y = class {
        static [x]() { return x }
    }) => assertEquals(42, y[42]()))(42);
    ((x, y = (new class {
        z() { return x }
    })) => assertEquals(42, y.z()))(42);

    ((x, y = (new class Y {
        static [x]() { return x }
        z() { return Y[42]() }
    })) => assertEquals(42, y.z()))(42);

    ((x, y = (new class {
        constructor() { this.z = x }
    })) => assertEquals(42, y.z))(42);
    ((x, y = (new class Y {
        constructor() { this.z = x }
    })) => assertEquals(42, y.z))(42);

    ((x, y = (new class extends x {
    })) => assertEquals(42, y.z()))(class { z() { return 42 } });

    
    ((x, {y = x}) => assertEquals(42, y))(42, {});
    ((x, [y = x]) => assertEquals(42, y))(42, []);
})();

;(function testMultiScopeCapture() {
    "use strict";
    var x = 1;
    {
        let y = 2;
        ((x, y, a = x, b = y) => {
            assertEquals(3, x);
            assertEquals(3, a);
            assertEquals(4, y);
            assertEquals(4, b);
        })(3, 4);
    }
})();
