function getx() {
    return x;
}
function gety() {
    return y;
}
function getz() {
    return z;
}

function main() {
    var proto = Object.getPrototypeOf(this);
    Object.defineProperty(proto, "x", { value: 5});
    
    Object.defineProperty(proto, "y", { get: String });
    
    Object.defineProperty(proto, "z", { get: function () { return 7;} });
    for (var i=0; i<20; i++) {
        assertEq(getx(), 5);
        assertEq(gety(), "");
	assertEq(getz(), 7);
    }
}
main();
