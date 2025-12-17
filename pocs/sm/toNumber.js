;

var sym = Symbol();

function add2(x) {
    return x + 2;
}
for (var i = 0; i < 9; i++)
    print(() => add2(sym), TypeError);

function sqr(x) {
    return x * x;
}
for (var i = 0; i < 9; i++)
    print(() => sqr(sym), TypeError);

function bit_or(x) {
    return x | x;
}
for (var i = 0; i < 9; i++)
    print(() => bit_or(sym), TypeError);

function bit_not(x) {
    return ~x;
}
for (var i = 0; i < 9; i++)
    print(() => bit_not(sym), TypeError);

function plus(x) {
    return +x;
}
for (var i = 0; i < 9; i++)
    print(() => plus(sym), TypeError);

function f(a, b) {
    return a + b;
}

function testPoly() {
    print(f(20, 30), 50);
    print(f("one", "two"), "onetwo");
    print(() => f(Symbol("one"), Symbol("two")), TypeError);
    print(() => f(Symbol("14"), 14), TypeError);
    print(() => f(Symbol("14"), 13.719), TypeError);
    print(() => f(14, Symbol("14")), TypeError);
    print(() => f(13.719, Symbol("14")), TypeError);
}

for (var i = 0; i < 9; i++)
    testPoly();

for (var i = 0; i < 9; i++)
    print(() => print(f(Symbol("14"), "40"), NaN), TypeError);
