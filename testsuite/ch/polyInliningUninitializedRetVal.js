




function leaf() { return 1; }
function f1() {
    var b = true || true;
    return leaf();
}
function f2 () {
    var c = true || true;
    return leaf();
}
function bar(f) {
    var a = f();
    return leaf(a);
}
bar(f1);
bar(f2);
bar(f2);
var c = bar(f2);
WScript.Echo(c);