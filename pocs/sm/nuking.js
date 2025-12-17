var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({sameCompartmentAs: g1});
g2.other = g1;

var o1 = g1.Math;
var o2 = g2.Math;

g1.nukeAllCCWs();


ex = null;
try {
    print(o1.abs(1), 1);
} catch (e) {
    ex = e;
}
print(ex.toString().includes("dead object"), true);


print(o2.abs(1), 1);


print(g2.evaluate("other.Math.abs(-2)"), 2);




ex = null;
try {
    g2.other.toString();
} catch (e) {
    ex = e;
}
print(ex.toString().includes("dead object"), true);



g2.evaluate("(" + function() {
    nukeAllCCWs();
    var ex = null;
    try {
        newGlobal({newCompartment: true}).Array();
    } catch (e) {
        ex = e;
    }
    print(ex.toString().includes('dead object'), true);
} + ")()");
