function testOverflow() {
    var called = false;
    function f(a) {
        print(a, 173);
        print(arguments.length, 2);
        print(arguments[0], a);
        print(arguments[1], a);
        called = true;
    }

    for (var i=0; i<10; i++)
        [173, 173, 173].sort(f);
    print(called, true);
}
testOverflow();


function testEqual() {
    var called = false;
    function f(a, b) {
        print(a, 173);
        print(arguments.length, 2);
        print(arguments[0], a);
        print(arguments[1], b);
        called = true;
    }

    for (var i=0; i<10; i++)
        [173, 173, 173].sort(f);
    print(called, true);
}
testEqual();


function testUnderflow() {
    var called = false;
    function f(a, b, c) {
        print(a, 173);
        print(c, undefined);
        print(arguments.length, 2);
        print(arguments[0], a);
        print(arguments[1], b);
        called = true;
    }

    for (var i=0; i<10; i++)
        [173, 173, 173].sort(f);
    print(called, true);
}
testUnderflow();

function testUnderflowMany() {
    var called = 0;
    function f(a, b, c, d, e, f, g, h) {
        print(a, 173);
        print(arguments.length, 3);
        print(arguments[0], a);
        print(arguments[1] < 3, true);
        print(c.length, 3);
        print(d, undefined);
        print(e, undefined);
        print(f, undefined);
        print(g, undefined);
        print(h, undefined);
        called += 1;
    }

    for (var i=0; i<10; i++)
        [173, 173, 173].map(f);
    print(called, 30);
}
testUnderflowMany();
