function testBasic() {
    var o1 = {x: 1};
    var o2 = {a: 1, b: 2, c: 3, x: 4, y: 5, z: 6};
    for (var i = 0; i < 4; i++) {
        var to1 = Object.assign({}, o1);
        print(JSON.stringify(to1), '{"x":1}');
        var to2 = Object.assign({}, o2);
        print(JSON.stringify(to2), '{"a":1,"b":2,"c":3,"x":4,"y":5,"z":6}');
    }
}
testBasic();


function testProto() {
    var from = {};
    from.a = 1;
    from.b = 2;
    from.c = 3;
    for (var i = 0; i < 5; i++) {
        var to = Object.assign(Object.create(null), from);
        print(JSON.stringify(to), '{"a":1,"b":2,"c":3}');
        print(Object.getPrototypeOf(to), null);
    }
}
testProto();


function testRealm() {
    var global = newGlobal({sameCompartmentAs: this});
    var from = global.evaluate("({})");
    from.a = 1;
    from.b = 2;
    from.c = 3;
    for (var i = 0; i < 5; i++) {
        var to = Object.assign({}, from);
        print(JSON.stringify(to), '{"a":1,"b":2,"c":3}');
        print(objectGlobal(to), this);
        print(Object.getPrototypeOf(to), Object.prototype);
    }
}
testRealm();
