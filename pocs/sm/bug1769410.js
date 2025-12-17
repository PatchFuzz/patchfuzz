function f(x) {
    var a = Math.fround(Math.fround(false));
    var b = Math.min(a, x ? Math.fround(x) : Math.fround(x));
    return b >>> 0;
}
function test() {
    with (this) {} 
    for (var i = 0; i < 100; i++) {
        print(f(Infinity), 0);
    }
    print(f(-1), 4294967295);
}
test();
