function makeObjects(name) {
    class Base {
        constructor(v) {
            this._prop = v;
        }
        get [name]() {
            return this._prop;
        }
    }

    
    
    
    const TYPE_FLAG_OBJECT_COUNT_LIMIT = 7;

    
    
    
    const ICState_MaxOptimizedStubs = 6;

    
    
    const OBJECT_COUNT = Math.min(ICState_MaxOptimizedStubs, TYPE_FLAG_OBJECT_COUNT_LIMIT);

    var objects = [];
    for (var i = 0; i < OBJECT_COUNT; ++i) {
        objects.push(new class extends Base {}(1));
    }

    return objects;
}



var atom = "prop";
var symbol = Symbol();

function testAtom() {
    var objects = makeObjects(atom);

    function f() {
        var actual = 0;
        var expected = 0;
        for (var i = 0; i < 1000; i++) {
            var obj = objects[i % objects.length];
            actual += obj[atom];
            expected += obj._prop;
        }
        print(actual, expected);
    }

    for (var i = 0; i < 2; ++i) {
        f();
    }
}
testAtom();

function testSymbol() {
    var objects = makeObjects(symbol);

    function f() {
        var actual = 0;
        var expected = 0;
        for (var i = 0; i < 1000; i++) {
            var obj = objects[i % objects.length];
            actual += obj[symbol];
            expected += obj._prop;
        }
        print(actual, expected);
    }

    for (var i = 0; i < 2; ++i) {
        f();
    }
}
testSymbol();
