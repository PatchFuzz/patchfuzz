var atom1 = "prop1";
var atom2 = "prop2";
var sym1 = Symbol();
var sym2 = Symbol();

function testAtom() {
    var proto = {
        get [atom1]() { return 1; },
        get [atom2]() { return 2; },
    };

    var holder = Object.create(proto);

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = holder[atom1];
            var y = holder[atom2];
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testAtom();

function testSymbol() {
    var proto = {
        get [sym1]() { return 1; },
        get [sym2]() { return 2; },
    };

    var holder = Object.create(proto);

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = holder[sym1];
            var y = holder[sym2];
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testSymbol();
