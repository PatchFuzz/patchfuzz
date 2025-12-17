;

function testBasic() {
    var g = function foo(a, b, c) { return a - b - c; };
    for (var i = 0; i < 100; i++) {
        var bound1 = g.bind(null, 1);
        print(bound1.length, 2);
        print(bound1.name, "bound foo");
        var bound2 = bound1.bind(null, 2);
        print(bound2.length, 1);
        print(bound2.name, "bound bound foo");
        print(bound2(9), -10);
    }
}
testBasic();

function testBindNonCtor() {
    var g = (a, b, c) => a - b - c;
    for (var i = 0; i < 100; i++) {
        var bound1 = g.bind(null, 1);
        var bound2 = bound1.bind(null, 2);
        print(bound1(2, 3), -4);
        print(bound2(4), -5);
        print(() => new bound1(2, 3), TypeError);
        print(() => new bound2(4), TypeError);
        print(bound2.length, 1);
        print(bound2.name, "bound bound g");
    }
}
testBindNonCtor();

function testBindSelfHosted() {
    var g = Array.prototype.map;
    var arr = [1, 2, 3];
    for (var i = 0; i < 100; i++) {
        var bound1 = g.bind(arr);
        var bound2 = bound1.bind(null, x => x + 5);
        print(bound1(x => x + 3).toString(), "4,5,6");
        print(bound2().toString(), "6,7,8");
        print(bound2.length, 0);
        print(bound2.name, "bound bound map");
    }
}
testBindSelfHosted();

function testBoundDeletedName() {
    var g = function foo(a, b, c) { return a - b - c; };
    var bound1 = g.bind(null);
    var bound2 = g.bind(null);
    delete bound2.name;
    for (var i = 0; i < 100; i++) {
        var obj = i < 50 ? bound1 : bound2;
        var bound3 = obj.bind(null);
        print(bound3.length, 3);
        print(bound3.name, i < 50 ? "bound bound foo" : "bound ");
    }
}
testBoundDeletedName();

function testWeirdProto() {
    var g = function foo() { return 123; };
    var proto = {bind: Function.prototype.bind};
    Object.setPrototypeOf(g, proto);
    for (var i = 0; i < 100; i++) {
        var bound1 = g.bind(null);
        print(Object.getPrototypeOf(bound1), proto);
        var bound2 = bound1.bind(null);
        print(Object.getPrototypeOf(bound2), proto);
        print(bound2(), 123);
    }
}
testWeirdProto();
