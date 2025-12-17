var atom1 = "prop1";
var atom2 = "prop2";
var sym1 = Symbol();
var sym2 = Symbol();

function testAtomAtom() {
    var holder = {
        get [atom1]() { return 1; },
        get [atom2]() { return 2; },
    };

    function get(name) {
        
        return holder[name];
    }

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = get(atom1);
            var y = get(atom2);
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testAtomAtom();

function testAtomSymbol() {
    var holder = {
        get [atom1]() { return 1; },
        get [sym2]() { return 2; },
    };

    function get(name) {
        
        return holder[name];
    }

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = get(atom1);
            var y = get(sym2);
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testAtomSymbol();

function testSymbolAtom() {
    var holder = {
        get [sym1]() { return 1; },
        get [atom2]() { return 2; },
    };

    function get(name) {
        
        return holder[name];
    }

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = get(sym1);
            var y = get(atom2);
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testSymbolAtom();

function testSymbolSymbol() {
    var holder = {
        get [sym1]() { return 1; },
        get [sym2]() { return 2; },
    };

    function get(name) {
        
        return holder[name];
    }

    function f() {
        for (var i = 0; i < 1000; ++i) {
            var x = get(sym1);
            var y = get(sym2);
            print(x, 1);
            print(y, 2);
        }
    }

    for (var i = 0; i < 2; i++) {
        f();
    }
}
testSymbolSymbol();
