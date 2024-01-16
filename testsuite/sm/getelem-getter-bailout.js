



var atom = "prop";
var symbol = Symbol();

function testAtom() {
    var holder = {
        get [atom]() {
            bailout();
            return 1;
        }
    };

    function f() {
        for (var i = 0; i < 2000; ++i) {
            var x = holder[atom];
            assertEq(x, 1);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testAtom();

function testSymbol() {
    var holder = {
        get [symbol]() {
            bailout();
            return 1;
        }
    };

    function f() {
        for (var i = 0; i < 2000; ++i) {
            var x = holder[symbol];
            assertEq(x, 1);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testSymbol();
