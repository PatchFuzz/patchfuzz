





var atom = "prop";
var symbol = Symbol();

function testAtom() {
    var holder = {
        get [atom]() {
            with ({}) {
                return 1;
            }
        }
    };

    function f() {
        for (var i = 0; i < 1000; ++i) {
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
            with ({}) {
                return 1;
            }
        }
    };

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = holder[symbol];
            assertEq(x, 1);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testSymbol();
