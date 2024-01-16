function foo(x,y) {
    function capture() { return x; }
    return bar(arguments);
}

function bar(x) {
    return baz.apply({}, x) + arguments.length;
}

function baz(x,y) {
    return x + y;
}

var sum = 0;
for (var i = 0; i < 100; i++) {
    sum += foo(1,2);
}
assertEq(sum, 400)
