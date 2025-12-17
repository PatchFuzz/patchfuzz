function f() { }
var o = { };
o.gf = function* () { yield 0; };

if (o.gf().next().value === 0) {
    print("passed");
} else {
    print("failed");
}
