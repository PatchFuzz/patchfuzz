function f() {
    var x;
    x.a;
    x = {};
}

try {
    f();
    print(0, 1);
} catch(e) {

}
