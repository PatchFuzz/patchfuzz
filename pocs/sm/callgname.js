function g1(x) {
    return x + 1;
}
function f1() {
    var y = 0;
    for (var i=0; i<100; i++) {
        y += g1(g1(i));
    }
    return y;
}
g1(10);
print(f1(), 5150);

x = 1;
other = newGlobal("same-compartment");
other.eval("f = function() { return x; }; x = 2;");

h = other.f;

function testOtherGlobal() {
    var y = 0;
    for (var i=0; i<100; i++) {
        y += h();
    }
    return y;
}
h();
print(testOtherGlobal(), 200);


f2 = function() {
    return x;
}
function test2() {
    var y = 0;
    for (var i=0; i<50; i++) {
        y += f2();
    }
    return y;
}
print(test2(), 50);
f2 = h;
print(test2(), 100);
